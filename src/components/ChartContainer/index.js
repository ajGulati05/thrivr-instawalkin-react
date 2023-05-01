import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addChartToDatabaseAction, editChartAction, lockChartAction } from "../../store/actions/charts";
import { isQuillEmpty } from "../../utils/helpers";
import ChiefComplaintContainer from "./ChiefComplaintContainer";
import ImageChartContainer from "./ImageChartContainer";
import SoapContainer from "./SoapContainer";
import { ChartContainerDiv } from "./styled";

const ChartContainer = ({ id, type, locked, createdAt, data, newChart, loading, modalShow }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const instauuid = history.location.hash.split("#/")[1];

  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [unsaved, setUnsaved] = useState(false);

  // Chief complaint
  const [chiefComplaint, setChiefComplaint] = useState(data[0] ? data[0] : "");

  // Image chart
  const [historyStep, setHistoryStep] = useState(0);
  const [lines, setLines] = useState(data.lines ? data.lines : []);
  const [lineHistory, setLineHistory] = useState(data.lines ? [lines] : [[]]);

  // SOAP
  const [subjective, setSubjective] = useState(data.subjective ? data.subjective : "");
  const [objective, setObjective] = useState(data.objective ? data.objective : "");
  const [assessment, setAssessment] = useState(data.assessment ? data.assessment : "");
  const [plan, setPlan] = useState(data.plan ? data.plan : "");

  // Errors
  const [chiefComplaintError, setChiefComplaintError] = useState("");
  const [linesError, setLinesError] = useState("");
  const [subjectiveError, setSubjectiveError] = useState("");
  const [objectiveError, setObjectiveError] = useState("");
  const [assessmentError, setAssessmentError] = useState("");
  const [planError, setPlanError] = useState("");
  const [soapError, setSoapError] = useState("");

  const handleSubmit = reqType => {
    let payloadData;

    // Check to see all fields are filled. If not, no request is made and errors are displayed
    if (type === "CC") {
      if (isQuillEmpty(chiefComplaint)) {
        setChiefComplaintError("The chief complaint field is required");
        return;
      }
      payloadData = chiefComplaint;
    } else if (type === "BC") {
      if (lines.length === 0) {
        setLinesError("The body chart is required");
        return;
      }
      payloadData = JSON.stringify({ lines });
    } else if (type === "SOAP") {
      const subjError = isQuillEmpty(subjective);
      const objError = isQuillEmpty(objective);
      const assessmentError = isQuillEmpty(assessment);
      const planError = isQuillEmpty(plan);

      if (subjError && objError && assessmentError && planError) {
        // if (subjError) {
        //   setSubjectiveError("The subjective field is required");
        // }
        // if (objError) {
        //   setObjectiveError("The objective field is required");
        // }
        // if (assessmentError) {
        //   setAssessmentError("The assessment field is required");
        // }
        // if (planError) {
        //   setPlanError("The plan field is required");
        // }
        setSoapError("At least one field must be filled in.")
        return;
      }
      payloadData = JSON.stringify({
        subjective,
        objective,
        assessment,
        plan
      });
    }

    if (reqType === "add") {
      dispatch(
        addChartToDatabaseAction({
          instauuid,
          chartId: id,
          type,
          data: payloadData
        })
      );
    }

    if (reqType === "edit") {
      dispatch(
        editChartAction({
          instauuid,
          chartId: id,
          type,
          data: payloadData
        })
      );
    }
  };

  const handleLock = () => {
    if (locked) {
      return;
    }

    if (unsaved) {
      setShowModal(true);
    } else {
      dispatch(
        lockChartAction({
          instauuid,
          chartId: id
        })
      );
    }
  };

  const confirmLock = () => {
    dispatch(
      lockChartAction({
        instauuid,
        chartId: id
      })
    );
    setShowModal(false);

    // Reset inputs to what's stored in the database
    if (type === "CC") {
      setChiefComplaint(data[0]);
    } else if (type === "BC") {
      setLineHistory(data.lineHistory);
      setHistoryStep(data.historyStep);
      setLines(data.lines);
    } else if (type === "SOAP") {
      setSubjective(data.subjective);
      setObjective(data.objective);
      setAssessment(data.assessment);
      setPlan(data.plan);
    }
  };

  return (
    <>
      <Modal
        title="Warning"
        visible={showModal}
        footer={[
          <Button key="lock" type="primary" loading={false} onClick={confirmLock}>
            Lock
          </Button>,
          <Button
            key="cancel"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </Button>
        ]}
      >
        <p>You have unsaved data. Do you want to lock without saving?</p>
      </Modal>
      <ChartContainerDiv>
        <div className="accordion">
          <div className="accordion-header">
            <div className="container-header">
              <p className="chart-date">{createdAt}</p>
              <div>
                <i className={locked ? "fa fa-lock" : "fa fa-unlock"} onClick={handleLock} />
                <i className={`fa fa-caret-down ${show ? "" : "right"}`} onClick={() => setShow(!show)} />
              </div>
            </div>
          </div>
          <div className={show ? "accordion-content show" : "accordion-content"}>
            {type === "CC" && (
              <ChiefComplaintContainer
                locked={locked}
                chiefComplaint={chiefComplaint}
                setChiefComplaint={setChiefComplaint}
                disabled={disabled}
                unsaved={unsaved}
                setUnsaved={setUnsaved}
                chiefComplaintError={chiefComplaintError}
                setChiefComplaintError={setChiefComplaintError}
              />
            )}
            {type === "BC" && (
              <ImageChartContainer
                locked={locked}
                history={lineHistory}
                setHistory={setLineHistory}
                historyStep={historyStep}
                setHistoryStep={setHistoryStep}
                lines={lines}
                setLines={setLines}
                linesError={linesError}
                setLinesError={setLinesError}
                disabled={disabled}
                unsaved={unsaved}
                setUnsaved={setUnsaved}
              />
            )}
            {type === "SOAP" && (
              <SoapContainer
                locked={locked}
                subjective={subjective}
                setSubjective={setSubjective}
                objective={objective}
                setObjective={setObjective}
                assessment={assessment}
                setAssessment={setAssessment}
                errors={{ subjectiveError, objectiveError, assessmentError, planError, soapError }}
                setErrors={{ setSubjectiveError, setObjectiveError, setAssessmentError, setPlanError, setSoapError }}
                plan={plan}
                setPlan={setPlan}
                disabled={disabled}
                unsaved={unsaved}
                setUnsaved={setUnsaved}
              />
            )}
            <div className="container-footer">
              {!locked &&
                (newChart ? (
                  <Button
                    onClick={() => {
                      handleSubmit("add");
                    }}
                    disabled={loading}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleSubmit("edit");
                    }}
                    disabled={loading}
                  >
                    Edit
                  </Button>
                ))}
              {/* {locked && (
                <Button onClick={() => console.log("Amend")} disabled={loading}>
                  Amend
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </ChartContainerDiv>
    </>
  );
};

export default ChartContainer;
