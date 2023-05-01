import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PCheckbox from "../../../components/PCheckbox";
import { Container, FormControl, FormControlBtn } from "./styled.js";
import { updateTherapistSubModalitiesReqAction } from "../../../store/actions/modalities";
import PButton from "../../../components/PButton";

const SubmodalityForm = ({ checkboxGroup, therapistSubModalities }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    submodalities: null
  });
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const loading =
    therapistSubModalities &&
    Array.isArray(therapistSubModalities) &&
    checkboxGroup &&
    Array.isArray(checkboxGroup) &&
    values.submodalities
      ? false
      : true;

  const handleChange = (event, field) => {
    if (values.submodalities.includes(field)) {
      const newValuesArray = values.submodalities.filter(item => item !== field);
      setValues(
        produce(values, draft => {
          draft.submodalities = newValuesArray;
        })
      );
    } else {
      const newValuesArray = values.submodalities.concat([field]).sort();
      setValues(
        produce(values, draft => {
          draft.submodalities = newValuesArray;
        })
      );
    }

    setSaveButtonDisabled(false);
  };

  const handleSubmit = () => {
    const selectedSubmodalities = values.submodalities ? values.submodalities.join(",") : null;

    const updatedModalities = {
      ...(selectedSubmodalities && { submodalities: selectedSubmodalities })
    };
    dispatch(updateTherapistSubModalitiesReqAction(updatedModalities));
  };

  useEffect(() => {
    if (therapistSubModalities && Array.isArray(therapistSubModalities)) {
      setValues(
        produce(values, draft => {
          draft.submodalities = therapistSubModalities;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [therapistSubModalities]);

  return (
    <Container>
      {!loading && (
        <>
          <Row gutter={16}>
            <Col xs={20} sm={12} md={12} lg={10} xl={10} xxl={6}>
              <FormControl>
                {checkboxGroup.map(item => {
                  return (
                    <PCheckbox
                      className="checkbox-spacing"
                      key={item.code}
                      checked={values.submodalities.includes(item.code)}
                      onChange={event => handleChange(event, item.code)}
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

SubmodalityForm.propTypes = {
  checkboxGroup: PropTypes.array,
  therapistSubModalities: PropTypes.array
};

export default withTheme(SubmodalityForm);
