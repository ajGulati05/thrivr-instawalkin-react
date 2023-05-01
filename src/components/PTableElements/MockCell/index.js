import React from "react";
import PropTypes from "prop-types";
import { MockCellWrapper, Cell, Comments } from "./styled";

const MockCell = ({ alignH, alignV, comments, children }) => {
  return (
    <MockCellWrapper>
      <div>
        <Cell alignh={alignH} alignv={alignV}>
          {children}
        </Cell>
        <Comments>{comments}</Comments>
      </div>
    </MockCellWrapper>
  );
};

MockCell.propTypes = {
  alignH: PropTypes.oneOf(["left", "center", "right"]),
  alignV: PropTypes.oneOf(["top", "center", "bottom"]),
  comments: PropTypes.string,
  children: PropTypes.node
};

MockCell.defaultProps = {
  alignH: "center",
  alignV: "center"
};

export default MockCell;
