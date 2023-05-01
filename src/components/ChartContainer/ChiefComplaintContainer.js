import React from "react";
import { Container } from "./styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { isQuillEmpty } from "../../utils/helpers";

const ChiefComplaintContainer = ({
  locked,
  chiefComplaint,
  setChiefComplaint,
  unsaved,
  setUnsaved,
  chiefComplaintError,
  setChiefComplaintError
}) => {
  const handleChange = e => {
    setChiefComplaint(e);
    if (!unsaved) {
      setUnsaved(true);
    }
    if (isQuillEmpty(e)) {
      setChiefComplaintError("The chief complaint field is required");
    } else {
      setChiefComplaintError("");
    }
  };

  return (
    <div className="chart-content-container">
      <Container>
        <h3 className="chart-header">Chief Complaint</h3>
        <ReactQuill
          theme="snow"
          value={chiefComplaint}
          onChange={handleChange}
          className="text-editor"
          readOnly={locked}
        />

        {chiefComplaintError && <p className="error-message">{chiefComplaintError}</p>}
      </Container>
    </div>
  );
};

export default ChiefComplaintContainer;
