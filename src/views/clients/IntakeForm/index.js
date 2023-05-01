import React, { useState, useEffect } from "react";
import { Card, Row, Col, Checkbox, Radio } from "antd";
import moment from "moment";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { medical_conditions_list } from "./constant";
import PInput from "../../../components/PInput";
import PPhoneNumInput from "../../../components/PPhoneNumInput";

const initialHealthMedicalCondition = {};
medical_conditions_list.map(element => {
  initialHealthMedicalCondition[element.value] = false;
});

const IntakeForm = ({ intakeFormDetail }) => {
  const [personalInfo, setPersonalInfo] = useState({
    birthdate: "",
    name: "",
    phone: "",
    address: ""
  });

  const [healthInfo, setHealthInfo] = useState({
    referred_by: "",
    physician_name: "",
    allergies: "",
    current_medications: "",
    surgery_reason: "",
    fractures_reason: "",
    illness_reason: "",
    ...initialHealthMedicalCondition,
    medical_other_bool: false,
    care_other_bool: false,
    other_bool: false
  });
  useEffect(() => {
    if (!isEmpty(intakeFormDetail)) {
      setPersonalInfo({
        birthdate: intakeFormDetail.birthdate ? new Date(intakeFormDetail.birthdate) : "",
        name: intakeFormDetail.name,
        phone: intakeFormDetail.phone,
        address: intakeFormDetail.address
      });

      const medicalData = intakeFormDetail?.medical_conditions?.[0]
        ? JSON.parse(intakeFormDetail.medical_conditions[0])
        : null;
      medicalData &&
        Object.keys(initialHealthMedicalCondition).map(key => {
          initialHealthMedicalCondition[key] = medicalData[key];
        });

      setHealthInfo({
        referred_by: intakeFormDetail?.referred_by,
        physician_name: intakeFormDetail?.physician_name,
        allergies: intakeFormDetail?.allergies,
        current_medications: intakeFormDetail?.current_medications,
        sports_activities: intakeFormDetail?.sports_activities,
        surgery: intakeFormDetail?.surgery && JSON.parse(intakeFormDetail.surgery[0]).surgery,
        surgery_reason:
          intakeFormDetail?.surgery &&
          JSON.parse(intakeFormDetail.surgery[0]).surgery &&
          JSON.parse(intakeFormDetail.surgery[0]).surgery_reason
            ? JSON.parse(intakeFormDetail.surgery[0]).surgery_reason
            : null,
        fractures: intakeFormDetail?.fractures && JSON.parse(intakeFormDetail.fractures[0]).fractures,
        fractures_reason:
          intakeFormDetail?.fractures &&
          JSON.parse(intakeFormDetail.fractures[0]).fractures &&
          JSON.parse(intakeFormDetail.fractures[0]).fractures_reason,
        illnesses_reason: JSON.parse(intakeFormDetail.surgery[0]).surgery_reason
          ? JSON.parse(intakeFormDetail.surgery[0]).surgery_reason
          : null,
        fractures: intakeFormDetail?.fractures && JSON.parse(intakeFormDetail.fractures[0]).fractures,
        fractures_reason:
          intakeFormDetail?.fractures &&
          JSON.parse(intakeFormDetail.fractures[0]).fractures &&
          JSON.parse(intakeFormDetail.fractures[0]).fractures_reason
            ? JSON.parse(intakeFormDetail.fractures[0]).fractures_reason
            : null,
        illness: intakeFormDetail?.illness && JSON.parse(intakeFormDetail.illness[0]).illness,
        illness_reason:
          intakeFormDetail?.illness &&
          JSON.parse(intakeFormDetail.illness[0]).illness &&
          JSON.parse(intakeFormDetail.illness[0]).illness_reason
            ? JSON.parse(intakeFormDetail.illness[0]).illness_reason
            : null,
        ...initialHealthMedicalCondition,
        physiotherapist: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.physiotherapist,
        chiropractor: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.chiropractor,
        massage_therapist: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.massage_therapist,
        naturopath: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.naturopath,
        care_reason: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.care_reason,
        number_treatments: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.number_treatments,
        physical: intakeFormDetail?.tests && JSON.parse(intakeFormDetail.tests[0])?.physical,
        "x-ray": intakeFormDetail?.tests && JSON.parse(intakeFormDetail.tests[0])?.["x-ray"],
        relieves: intakeFormDetail?.relieves ? intakeFormDetail.relieves[0] : "",
        aggravates: intakeFormDetail?.aggravates ? intakeFormDetail.aggravates[0] : "",
        motor_workplace:
          intakeFormDetail?.motor_workplace && JSON.parse(intakeFormDetail.motor_workplace[0]).motor_workplace,
        motor_workplace_reason:
          intakeFormDetail?.motor_workplace && JSON.parse(intakeFormDetail.motor_workplace[0])?.motor_workplace_reason
            ? JSON.parse(intakeFormDetail.motor_workplace[0])?.motor_workplace_reason
            : null,
        medical_other_bool:
          intakeFormDetail?.medical_conditions && JSON.parse(intakeFormDetail.medical_conditions[0]).medical_other
            ? true
            : false,
        medical_other:
          intakeFormDetail?.medical_conditions && JSON.parse(intakeFormDetail.medical_conditions[0]).medical_other,
        care_other_bool: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0]).care_other ? true : false,
        care_other: intakeFormDetail?.care && JSON.parse(intakeFormDetail.care[0])?.care_other,
        other_bool: intakeFormDetail?.tests && JSON.parse(intakeFormDetail.tests[0]).other ? true : false,
        other: intakeFormDetail?.tests && JSON.parse(intakeFormDetail.tests[0]).other
      });
    }
  }, [intakeFormDetail]);

  const PersonalInfoForm = ({ personalInfo }) => {
    return (
      <div className="form-row" style={{ width: "100%" }}>
        <Row gutter={20}>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>First Name</label>
            <PInput value={personalInfo.name.split(" ")[0]} name="firstname" placeholder="First Name" />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Last Name</label>
            <PInput value={personalInfo.name.split(" ")[1]} name="lastname" placeholder="Last Name" />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Birth Date</label>
            <PInput
              value={personalInfo.birthdate ? moment(personalInfo.birthdate).format("LL") : ""}
              name="birthdate"
              placeholder="Birth Date"
            />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Phone Number</label>
            <PPhoneNumInput name="phone" placeholder="Phone Nummber" phoneNumber={personalInfo.phone} />
          </Col>
        </Row>
      </div>
    );
  };
  PersonalInfoForm.propTypes = {
    personalInfo: PropTypes.object,
    onPersonalSubmit: PropTypes.func,
    personalSetValues: PropTypes.func,
    personalErrors: PropTypes.any,
    setPersonalInfotFormRef: PropTypes.func
  };

  const HealthInfoForm = ({ healthInfo }) => {
    return (
      <>
        <Row gutter={20}>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Referred by</label>
            <PInput value={healthInfo.referred_by} name="referredby" placeholder="Referred by" />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Physician name</label>
            <PInput type="text" name="physician_name" placeholder="Physician name" value={healthInfo.physician_name} />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Allergies</label>
            <PInput type="text" name="allergies" placeholder="Allergies" value={healthInfo.allergies} />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Current medications</label>
            <PInput
              type="text"
              name="current_medications"
              placeholder="Current medications"
              value={healthInfo.current_medications}
            />
          </Col>
          <Col xs={24} className="ant-item">
            <label>Are you under medical care for any of the following</label>
            <Row className="form-row" style={{ marginTop: "0" }}>
              {medical_conditions_list.map((data, index) => (
                <Col className="checkbox" key={index}>
                  <Checkbox name={data.value} id={data.value} checked={healthInfo[data.value]}>
                    {data.label}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} className="ant-item">
            <label>Have you received care from any of the following</label>
            <Row className="form-row" style={{ marginTop: "0" }}>
              <Col className="checkbox">
                <Checkbox name="physiotherapist" id="physiotherapist" checked={healthInfo.physiotherapist}>
                  Physiotherapist
                </Checkbox>
              </Col>
              <Col className="checkbox">
                <Checkbox name="massage_therapist" id="Massage therapist" checked={healthInfo.massage_therapist}>
                  Massage therapist
                </Checkbox>
              </Col>
              <Col className="checkbox">
                <Checkbox name="chiropractor" id="chiropractor" checked={healthInfo.chiropractor}>
                  Chiropractor
                </Checkbox>
              </Col>
              <Col className="checkbox">
                <Checkbox name="naturopath" id="naturopath" checked={healthInfo.naturopath}>
                  Naturopath
                </Checkbox>
              </Col>
            </Row>
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Reason for treatment</label>
            <PInput type="text" name="care_reason" placeholder="Reason for treatment" value={healthInfo.care_reason} />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>Number/duration of treatments</label>
            <PInput
              type="text"
              name="number_treatments"
              placeholder="Number/duration of treatments"
              value={healthInfo.number_treatments}
            />
          </Col>
          <Col xs={24} className="ant-item">
            <label>Have you had surgery in the past?</label>
            <Radio name="surgery" id="surgery_no" checked={!healthInfo.surgery}>
              No
            </Radio>
            <Radio name="surgery" id="surgery_yes" checked={healthInfo.surgery}>
              Yes
            </Radio>
          </Col>
          <Col xs={24} className="ant-item">
            <label>Have you had any fractures/sprains in the past?</label>
            <Radio name="fractures" id="fractures_no" checked={!healthInfo.fractures}>
              No
            </Radio>
            <Radio name="fractures" id="fractures_yes" checked={healthInfo.fractures}>
              Yes
            </Radio>
          </Col>
          <Col xs={24} className="ant-item">
            <label>Have you had any serious illnesses in the past?</label>
            <Radio name="illness" id="illnesses_no" checked={!healthInfo.illness}>
              No
            </Radio>
            <Radio name="illness" id="illnesses_yes" checked={healthInfo.illness}>
              Yes
            </Radio>
          </Col>
          <Col xs={24} className="ant-item">
            <label>Did the current injury result from a motor vehicle accident or workplace injury?</label>
            <Radio name="motor_workplace" id="motor_workplace_no" checked={!healthInfo.motor_workplace}>
              No
            </Radio>
            <Radio name="motor_workplace" id="motor_workplace_yes" checked={healthInfo.motor_workplace}>
              Yes
            </Radio>
          </Col>
          <Col xs={24} className="ant-item">
            <label>Have you had any of the following regarding your current condition</label>
            <Row className="form-row" style={{ marginTop: "0" }}>
              <Col className="checkbox">
                <Checkbox name="physical" id="physician_examination" checked={healthInfo.physical}>
                  Physician's examination
                </Checkbox>
              </Col>
              <Col className="checkbox">
                <Checkbox name="x-ray" id="x-ray" checked={healthInfo["x-ray"]}>
                  X-ray
                </Checkbox>
              </Col>
            </Row>
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>What relieves your pain?</label>
            <PInput type="text" name="relieves" placeholder="What relieves your pain" value={healthInfo.relieves} />
          </Col>
          <Col lg={12} sm={24} xs={24} className="ant-item">
            <label>What aggravates your pain?</label>
            <PInput
              type="text"
              name="aggravates"
              placeholder="What aggravates your pain"
              value={healthInfo.aggravates}
            />
          </Col>
        </Row>
      </>
    );
  };

  HealthInfoForm.propTypes = {
    healthInfo: PropTypes.object,
    onHeathSubmit: PropTypes.func,
    setPageKey: PropTypes.func
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <PersonalInfoForm personalInfo={personalInfo} />
            <HealthInfoForm healthInfo={healthInfo} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(IntakeForm);
