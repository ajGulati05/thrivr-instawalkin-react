import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PCheckbox from "../../../components/PCheckbox";
import pNotification from "../../../components/PNotification";
import { Container, FormControl, FormHeader, FormControlBtn } from "./styled.js";
import { updateTherapistDurationReqAction } from "../../../store/actions/duration";
import PButton from "../../../components/PButton";

const DurationForm = ({ checkboxGroup, therapistDurations }) => {
  const dispatch = useDispatch();
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    durations: null
  });
  const [errValues, setErrValues] = useState({
    durations: false
  });
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const loading = values.durations ? false : true;
  const middleIndex = Math.round(checkboxGroup.length / 2) - 1;
  const firstColumnSelections = checkboxGroup.filter(item => checkboxGroup.indexOf(item) <= middleIndex);
  const secondColumnSelections = checkboxGroup.filter(item => checkboxGroup.indexOf(item) > middleIndex);

  const handleChange = (event, field) => {
    if (values.durations.includes(field)) {
      const newValuesArray = values.durations.filter(item => item !== field);
      setValues(
        produce(values, draft => {
          draft.durations = newValuesArray;
        })
      );
    } else {
      const newValuesArray = values.durations.concat([field]).sort();
      setValues(
        produce(values, draft => {
          draft.durations = newValuesArray;
        })
      );
    }

    setSaveButtonDisabled(false);

    setErrValues(
      produce(errValues, draft => {
        if (event) {
          if (firstValidation) draft.durations = false;
        } else {
          if (firstValidation) draft.durations = true;
        }
      })
    );
  };

  const validation = () => {
    const errNoDuration =
      values && values.durations && Array.isArray(values.durations) && values.durations.length === 0 ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.durations = errNoDuration;
      })
    );
    return !errNoDuration;
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const updatedProfile = {
        durations: values.durations.toString()
      };
      dispatch(updateTherapistDurationReqAction(updatedProfile));
    } else {
      pNotification({
        type: "error",
        message: "Validation Error!",
        description: "A Duration Is Required!"
      });
    }
  };

  useEffect(() => {
    setValues(
      produce(values, draft => {
        draft.durations = therapistDurations;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [therapistDurations]);

  return (
    <Container>
      {!loading && (
        <>
          <Row gutter={[0, 0]}>
            <FormHeader>Durations</FormHeader>
          </Row>
          <Row gutter={[0, 0]}>
            <Col xs={24} sm={12}>
              <FormControl>
                {firstColumnSelections.map(item => {
                  return (
                    <PCheckbox
                      className="checkbox-spacing"
                      key={item.value}
                      checked={values.durations.includes(item.value)}
                      onChange={event => handleChange(event, item.value)}
                    >
                      {item.label}
                    </PCheckbox>
                  );
                })}
              </FormControl>
            </Col>
            <Col xs={24} sm={12}>
              <FormControl>
                {secondColumnSelections.map(item => {
                  return (
                    <PCheckbox
                      className="checkbox-spacing"
                      key={item.value}
                      checked={values.durations.includes(item.value)}
                      onChange={event => handleChange(event, item.value)}
                    >
                      {item.label}
                    </PCheckbox>
                  );
                })}
              </FormControl>
            </Col>
          </Row>
          <FormControlBtn>
            <PButton disabled={saveButtonDisabled} pname="SAVE" ptype="save" onClick={handleSubmit} width="30%" />
          </FormControlBtn>
        </>
      )}
    </Container>
  );
};

DurationForm.propTypes = {
  checkboxGroup: PropTypes.array,
  therapistDurations: PropTypes.array
};

export default withTheme(DurationForm);
