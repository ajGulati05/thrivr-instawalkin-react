import React, { useState, useEffect } from "react";
import { Card, Row, Col, Checkbox } from "antd";
import { isEmpty } from "lodash";
import { withTheme } from "styled-components";
import { symptoms } from "./constant";
import PInput from "../../../components/PInput";

const initialSymptoms = {};
symptoms.map(element => {
  initialSymptoms[element.value] = false;
});

const CovidForm = ({ covidFormDetail,isBookingDetails }) => {
  const [formValue, setFormValue] = useState({
    precautions: "",
    contact: false,
    antibody: false,
    status: false,
    ...initialSymptoms
  });

  useEffect(() => {
    if (!isEmpty(covidFormDetail)) {
      const medicalData = covidFormDetail?.symptoms?.[0] ? JSON.parse(covidFormDetail.symptoms[0]) : null;
      medicalData &&
        Object.keys(initialSymptoms).map(key => {
          initialSymptoms[key] = medicalData[key];
        });
      setFormValue({
        status: covidFormDetail?.testing?.[0] ? JSON.parse(covidFormDetail.testing[0]).status : false,
        antibody: covidFormDetail?.testing?.[0] ? JSON.parse(covidFormDetail.testing[0]).antibody : false,
        when: covidFormDetail?.testing?.[0] ? JSON.parse(covidFormDetail.testing[0]).when : "",
        ...initialSymptoms,
        exposure: covidFormDetail?.exposure ? JSON.parse(covidFormDetail.exposure) : false,
        precautions: covidFormDetail?.precautions ? covidFormDetail?.precautions?.[0] : "",
        air_travel: covidFormDetail?.travel?.[0] ? JSON.parse(covidFormDetail.travel[0]).air_travel : false,
        high_infection: covidFormDetail?.travel?.[0] ? JSON.parse(covidFormDetail.travel[0]).high_infection : false,
        contact: covidFormDetail?.contact ? JSON.parse(JSON.parse(covidFormDetail.contact)) : false,
        willing_was: covidFormDetail?.actions ? JSON.parse(covidFormDetail.actions)?.willing_was : false,
        willing_wear: covidFormDetail?.actions ? JSON.parse(covidFormDetail.actions)?.willing_wear : false,
        name: covidFormDetail?.name ? covidFormDetail.name[0] : ""
      });
    }
  }, [covidFormDetail]);

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false}>
            <Row gutter={20}>
              <Col lg={isBookingDetails || covidFormDetail ? 24 : 12} xs={24} className="ant-item">
                <label>Name</label>
                <PInput value={formValue.name} name="name" placeholder="Name" />
              </Col>

              <Col lg={isBookingDetails || covidFormDetail ? 24 : 12} xs={24} className="ant-item">
              <label>Precautions</label>
                <PInput
                  type="text"
                  name="Precautions"
                  placeholder="Precautions"
                  value={formValue.precautions}
                />
              </Col>
              <Col xs={24} className="ant-item">
                <label>Symptoms</label>
                <Row className="form-row" style={{ marginTop: "0" }}>
                  {symptoms.map((data, index) => (
                    <Col className="checkbox" key={index}>
                      <Checkbox name={data.value} id={data.value} checked={formValue[data.value]}>
                        {data.label}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={24} className="ant-item">
                <label>Actions</label>
                <Row className="form-row" style={{ marginTop: "0" }}>
                  <Col className="checkbox">
                    <Checkbox name="willing_was" id="willing_was" checked={formValue.willing_was}>
                      Willing Was
                    </Checkbox>
                  </Col>
                  <Col className="checkbox">
                    <Checkbox name="willing_wear" id="willing_wear" checked={formValue.willing_wear}>
                      Willing Wear
                    </Checkbox>
                  </Col>
                  <Col className="checkbox">
                    <Checkbox name="exposure" id="exposure" checked={formValue.exposure}>
                      Exposure
                    </Checkbox>
                  </Col>
                  <Col className="checkbox">
                    <Checkbox name="contact" id="contact" checked={formValue.contact}>
                      Contact
                    </Checkbox>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} className="ant-item">
                <label>Testing</label>
                <Row className="form-row" style={{ marginTop: "0" }}>
                  <Col className="checkbox">
                    <Checkbox name="status" id="status" checked={formValue.status}>
                      Status
                    </Checkbox>
                  </Col>
                  <Col className="checkbox">
                    <Checkbox name="antibody" id="antibody" checked={formValue.antibody}>
                      Antibody
                    </Checkbox>
                  </Col>
                </Row>
                </Col>
              <Col xs={24} className="ant-item">
                <Row className="form-row" style={{ marginTop: "0" }}>
                  <Col lg={isBookingDetails || covidFormDetail ? 24 : 12} xs={24} className="ant-item">
                  <label>When</label>
                    <PInput type="text" name="when" placeholder="When" value={formValue.when} />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} className="ant-item">
                <label>Travel</label>
                <Row className="form-row" style={{ marginTop: "0" }}>
                  <Col className="checkbox">
                    <Checkbox name="air_travel" id="air_travel" checked={formValue.air_travel}>
                      Air Travel
                    </Checkbox>
                  </Col>
                  <Col className="checkbox">
                    <Checkbox name="high_infection" id="high_infection" checked={formValue.high_infection}>
                      High Infection
                    </Checkbox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(CovidForm);
