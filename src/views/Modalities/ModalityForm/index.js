import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PCheckboxGroup from "../../../components/PCheckboxGroup";
import pNotification from "../../../components/PNotification";
import { Container, FormControl, FormHeader, FormControlBtn } from "./styled.js";
import { updateTherapistModalitiesReqAction } from "../../../store/actions/modalities";
import PButton from "../../../components/PButton";

const ModalityForm = ({ checkboxGroup, therapistModalities }) => {
  const dispatch = useDispatch();
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    modalities: ""
  });
  const [errValues, setErrValues] = useState({
    modalities: false
  });
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const loading =
    therapistModalities && Array.isArray(therapistModalities) && checkboxGroup && Array.isArray(checkboxGroup)
      ? false
      : true;

  const handleChange = e => {
    setValues(
      produce(values, draft => {
        draft.modalities = e.toString();
      })
    );
    if (e.toString().length !== 0) {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }

    setErrValues(
      produce(errValues, draft => {
        if (e) {
          if (firstValidation) draft.modalities = false;
        } else {
          if (firstValidation) draft.modalities = true;
        }
      })
    );
  };

  const validation = () => {
    const errNoModalities = values && !values.modalities ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.modalities = errNoModalities;
      })
    );
    return !errNoModalities;
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const updatedModalities = {
        modalities: values.modalities
      };
      dispatch(updateTherapistModalitiesReqAction(updatedModalities));
    } else {
      pNotification({
        type: "error",
        message: "Validation Error!",
        description: "A Modality Is Required!"
      });
    }
  };

  useEffect(() => {
    if (therapistModalities && Array.isArray(therapistModalities)) {
      setValues(
        produce(values, draft => {
          draft.modalities = therapistModalities.toString();
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [therapistModalities]);

  return (
    <Container>
      {!loading && (
        <>
          <Row gutter={16}>
            <Col className="gutter-row" xs={20} sm={12} md={12} lg={10} xl={10} xxl={6}>
              <FormControl>
                <PCheckboxGroup
                  options={checkboxGroup}
                  defaultValue={therapistModalities}
                  onChange={handleChange}
                ></PCheckboxGroup>
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

ModalityForm.propTypes = {
  checkboxGroup: PropTypes.array,
  therapistModalities: PropTypes.array
};

export default withTheme(ModalityForm);
