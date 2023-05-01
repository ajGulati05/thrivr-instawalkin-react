import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import { Row, Col } from "antd";
import PInput from "../../../components/PInput";
import PRadio from "../../../components/PRadio";
import PButton from "../../../components/PButton";
import ProfileImageUploadForm from "../ProfileImageUploadForm";
import {
  Container,
  ProfileImgWrap,
  ProfileDetail,
  FormControl,
  GenderWrap,
  LabelText,
  FormControlBtn,
  NameText,
  Div
} from "./styled.js";
import { updateTherapistProfileReqAction } from "../../../store/actions/profile";

const PersonalInformationForm = ({ profileData }) => {
  const dispatch = useDispatch();
  const [firstValidation, setFirstValidation] = useState(false);
  const [values, setValues] = useState({
    firstname: profileData?.firstname || "",
    lastname: profileData?.lastname || "",
    business_name: profileData?.business_name || "",
    gender: profileData?.gender || ""
  });
  const [errValues, setErrValues] = useState({
    firstname: false,
    lastname: false,
    business_name: false,
    gender: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(
      produce(values, draft => {
        draft[name] = value;
      })
    );

    setErrValues(
      produce(errValues, draft => {
        if (value) {
          if (firstValidation) draft[name] = false;
        } else {
          if (firstValidation) draft[name] = true;
        }
      })
    );
  };

  const validation = () => {
    const errFirstName = values.firstname === "" || values.firstname.length <= 2 ? true : false;
    const errLastName = values.lastname === "" || values.lastname.length <= 2 ? true : false;
    const errBusinessName = values.business_name === "" || values.business_name.length <= 2 ? true : false;
    const errGender = values.gender === "" ? true : false;
    setErrValues(
      produce(errValues, draft => {
        draft.firstname = errFirstName;
        draft.lastname = errLastName;
        draft.business_name = errBusinessName;
        draft.gender = errGender;
      })
    );
    return !errFirstName && !errLastName && !errBusinessName && !errGender;
  };

  const handleRadio = e => {
    setValues(
      produce(values, draft => {
        draft.gender = e.target.value;
      })
    );
  };

  const handleSubmit = () => {
    const validated = validation();
    setFirstValidation(true);
    if (validated) {
      const updatedProfile = {
        firstname: values.firstname,
        lastname: values.lastname,
        business_name: values.business_name,
        gender: values.gender
      };
      dispatch(updateTherapistProfileReqAction(updatedProfile));
    }
  };

  useEffect(() => {
    if (profileData) {
      setValues(
        produce(values, draft => {
          draft.firstname = profileData.firstname;
          draft.lastname = profileData.lastname;
          draft.business_name = profileData.business_name;
          draft.gender = profileData.gender;
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData]);

  return (
    <Container>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} sm={12} md={12}>
          <ProfileImgWrap>
            <Div>
              <ProfileImageUploadForm imageSource={profileData?.avatar} />
              <NameText>
                {profileData?.firstname} {profileData?.lastname}
              </NameText>
            </Div>
          </ProfileImgWrap>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={12}>
          <ProfileDetail>
            <FormControl>
              <PInput
                name="firstname"
                label="Firstname"
                value={values?.firstname}
                onChange={handleChange}
                errorStas={errValues.firstname}
                helperMessage={errValues.firstname ? "The firstname is not valid!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="lastname"
                label="Lastname"
                value={values?.lastname}
                onChange={handleChange}
                errorStas={errValues.lastname}
                helperMessage={errValues.lastname ? "The lastname is not valid!" : ""}
              />
            </FormControl>

            <FormControl>
              <PInput
                name="business_name"
                label="Business Name"
                value={values?.business_name}
                onChange={handleChange}
                errorStas={errValues.business_name}
                helperMessage={errValues.business_name ? "The business name is not valid!" : ""}
              />
            </FormControl>

            <FormControl>
              <LabelText>Gender</LabelText>
              <GenderWrap onChange={handleRadio} value={values?.gender}>
                <PRadio value={"M"}>Male</PRadio>
                <PRadio value={"F"}>Female</PRadio>
                <PRadio value={"O"}>Other</PRadio>
              </GenderWrap>
            </FormControl>

            <FormControlBtn>
              <PButton pname="SAVE" ptype="save" onClick={handleSubmit} width="30%" />
            </FormControlBtn>
          </ProfileDetail>
        </Col>
      </Row>
    </Container>
  );
};

PersonalInformationForm.propTypes = {
  profileData: PropTypes.object
};

export default withTheme(PersonalInformationForm);
