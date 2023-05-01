import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styled";
import { Stage, Layer, Line, Image, Shape } from "react-konva";
import useImage from "use-image";
import skeleton from "../../assets/images/skeleton.png";

const ImageChartContainer = ({
  locked,
  history,
  setHistory,
  historyStep,
  setHistoryStep,
  lines,
  setLines,
  unsaved,
  setUnsaved,
  linesError,
  setLinesError
}) => {
  const [tool, setTool] = useState("pen");
  const [strokeWidth, setStrokeWidth] = useState(6);
  const isDrawing = useRef(false);
  const drawingRef = useRef(false);
  const [image] = useImage(skeleton);

  useEffect(() => {
    if (lines.length === 0 && unsaved) {
      setLinesError("The body chart is required");
    } else {
      setLinesError("");
    }
  }, [lines]);

  const handleMouseDown = e => {
    isDrawing.current = true;

    // the function will return pointer position relative to the passed node
    var transform = e.target.getAbsoluteTransform().copy();

    // to detect relative position we need to invert transform
    transform.invert();

    // get pointer (mouse or touch) position
    const pos = e.target.getStage().getPointerPosition();

    // get x and y position coordinates
    const pointX = transform.point(pos).x;
    const pointY = transform.point(pos).y;

    const lineObj = [...lines, { tool, points: [pointX, pointY], strokeWidth }];
    setLines(lineObj);
  };

  const handleMouseMove = e => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }

    // the function will return pointer position relative to the passed node
    var transform = e.target.getAbsoluteTransform().copy();

    // to detect relative position we need to invert transform
    transform.invert();

    // get pointer (mouse or touch) position
    const pos = e.target.getStage().getPointerPosition();

    // get x and y position coordinates
    const pointX = transform.point(pos).x;
    const pointY = transform.point(pos).y;

    let lastLine = lines[lines.length - 1];

    // add point
    lastLine.points = lastLine.points.concat([pointX, pointY]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    if (isDrawing.current) {
      isDrawing.current = false;
      setHistoryStep(historyStep + 1);
      setHistory([...history.slice(0, historyStep + 1), lines]);
      if (!unsaved) {
        setUnsaved(true);
      }
    }
  };

  const handleUndo = () => {
    if (historyStep === 0) {
      return;
    }
    setLines(history[historyStep - 1]);
    setHistoryStep(historyStep - 1);
  };

  const handleRedo = () => {
    if (historyStep === history.length - 1) {
      return;
    }
    setLines(history[historyStep + 1]);
    setHistoryStep(historyStep + 1);
  };

  const handleClear = () => {
    drawingRef.current.clear();
    setLines([]);
    setHistoryStep(historyStep + 1);
    setHistory([...history, []]);
  };

  const handleMouse = (e, handleFunction) => {
    if (!locked && tool !== "move") {
      handleFunction(e);
    }
  };

  return (
    <div className="chart-content-container">
      <Container>
        <h3 className="chart-header">Body Chart</h3>
        <div className="canvas-container">
          <div className={`chart-buttons ${locked && "locked"}`}>
            <div className="button-group">
              <button className={tool === "pen" ? "selected" : undefined} onClick={() => setTool("pen")}>
                <i className="fa fa-pencil" />
              </button>
              <button className={tool === "eraser" ? "selected" : undefined} onClick={() => setTool("eraser")}>
                <i className="fa fa-eraser" />
              </button>
              <button className={tool === "move" ? "selected" : undefined} onClick={() => setTool("move")}>
                <i className="fa fa-arrows" />
              </button>
            </div>

            <div className="button-group">
              <button className={strokeWidth === 6 ? "selected" : undefined} onClick={() => setStrokeWidth(6)}>
                <div className="brush-size small"></div>
              </button>
              <button className={strokeWidth === 8 ? "selected" : undefined} onClick={() => setStrokeWidth(8)}>
                <div className="brush-size medium"></div>
              </button>
              <button className={strokeWidth === 10 ? "selected" : undefined} onClick={() => setStrokeWidth(10)}>
                <div className="brush-size large"></div>
              </button>
            </div>

            <div className="button-group">
              <button onClick={() => handleUndo()}>
                <i className="fa fa-undo" />
              </button>
              <button onClick={() => handleRedo()}>
                <i className="fa fa-repeat" />
              </button>
              <button onClick={() => handleClear()}>
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
          <div className={`canvas ${tool === "move" && "move"}`}>
            <Stage
              width={400}
              height={400}
              onMouseDown={e => {
                handleMouse(e, handleMouseDown);
              }}
              onMousemove={e => {
                handleMouse(e, handleMouseMove);
              }}
              onMouseup={e => {
                handleMouse(e, handleMouseUp);
              }}
              onTouchstart={e => {
                handleMouse(e, handleMouseDown);
              }}
              onTouchmove={e => {
                handleMouse(e, handleMouseMove);
              }}
              onTouchend={e => {
                handleMouse(e, handleMouseUp);
              }}
              draggable={tool === "move"}
            >
              <Layer>
                <Image width={400} height={400} image={image} />
              </Layer>
              <Layer ref={drawingRef}>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke="#df4b26"
                    strokeWidth={line.strokeWidth}
                    tension={0.5}
                    lineCap="round"
                    globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
        {linesError && <p className="error-message">{linesError}</p>}
      </Container>
    </div>
  );
};

export default ImageChartContainer;
