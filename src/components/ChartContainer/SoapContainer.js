import React, { useState, useRef } from "react";
import { Container } from "./styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { isQuillEmpty } from "../../utils/helpers";

const SoapContainer = ({
  locked,
  subjective,
  setSubjective,
  objective,
  setObjective,
  assessment,
  setAssessment,
  plan,
  setPlan,
  unsaved,
  setUnsaved,
  errors,
  setErrors
}) => {
  const { subjectiveError, objectiveError, assessmentError, planError, soapError } = errors;
  const { setSubjectiveError, setObjectiveError, setAssessmentError, setPlanError} = setErrors;

  // const checkError = (e, setError, errorMessage) => {
  //   if (isQuillEmpty(e)) {
  //     setError(errorMessage);
  //   } else {
  //     setError("");
  //   }
  // };

  return (
    <div className="chart-content-container">
      <Container>
        <h3 className="chart-header">Subjective</h3>
        <ReactQuill
          theme="snow"
          value={subjective}
          onChange={e => {
            setSubjective(e);
            if (!unsaved) {
              setUnsaved(true);
            }
            // checkError(e, setSubjectiveError, "The subjective field is required");
          }}
          className="text-editor"
          readOnly={locked}
        />
        {subjectiveError && <p className="error-message">{subjectiveError}</p>}
      </Container>
      <Container>
        <h3 className="chart-header">Objective</h3>
        <ReactQuill
          theme="snow"
          value={objective}
          onChange={e => {
            setObjective(e);
            if (!unsaved) {
              setUnsaved(true);
            }
            // checkError(e, setObjectiveError, "The objective field is required");
          }}
          className="text-editor"
          readOnly={locked}
        />
        {objectiveError && <p className="error-message">{objectiveError}</p>}
      </Container>
      <Container>
        <h3 className="chart-header">Assessment</h3>
        <ReactQuill
          theme="snow"
          value={assessment}
          onChange={e => {
            setAssessment(e);
            if (!unsaved) {
              setUnsaved(true);
            }
            // checkError(e, setAssessmentError, "The assessment field is required");
          }}
          className="text-editor"
          readOnly={locked}
        />
        {assessmentError && <p className="error-message">{assessmentError}</p>}
      </Container>
      <Container>
        <h3 className="chart-header">Plan</h3>
        <ReactQuill
          theme="snow"
          value={plan}
          onChange={e => {
            setPlan(e);
            if (!unsaved) {
              setUnsaved(true);
            }
            // checkError(e, setPlanError, "The plan field is required");
          }}
          className="text-editor"
          readOnly={locked}
        />
        {planError && <p className="error-message">{planError}</p>}
        {soapError && <p className="error-message">{soapError}</p>}
      </Container>
    </div>
  );
};

export default SoapContainer;
