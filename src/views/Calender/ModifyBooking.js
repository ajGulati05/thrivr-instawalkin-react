import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Select, Divider, Form } from "antd";
import { withTheme } from "styled-components";
import { getAllSubModalitiesReqAction, getTherapistSubModalitiesReqAction } from "../../store/actions/modalities";
import {
  getReceiptsReqAction,
  modifyManagerSpecialityReqAction,
  modifyBookingReqAction
} from "../../store/actions/bookings";
import PInput from "../../components/PInput";
import { isEmpty } from "lodash";
import PButton from "../../components/PButton";
import PaymentType from "./PaymentType";
import Duration from "./Duration";

const { Option } = Select;

const ModifyBooking = ({ handleBookingDetails, timezone }) => {
  const [formRef] = Form.useForm();
  const bookingDetails = useSelector(({ bookingDetails }) => bookingDetails.bookingDetails);
  const allModalities = useSelector(({ modalities: { allModalities } }) => allModalities);
  const therapistModalities = useSelector(({ modalities: { therapistModalities } }) => therapistModalities);
  const modalitySelections = therapistModalities.map(i => allModalities.filter(item => item.id === i)[0]);
  const [data, setData] = useState({
    modality_id: bookingDetails.manager_speciality_id.id,
    tip: parseInt(bookingDetails.pricing.tip_amount),
    start_datetime: "00:00",
    project_id: bookingDetails.project.id,
    sub_modalities: "",
    sub_modalitie: bookingDetails.addOns,
    start_datetime: bookingDetails.start_datetime
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubModalitiesReqAction());
    dispatch(getTherapistSubModalitiesReqAction());
  }, [dispatch]);

  useEffect(() => {
    formRef.setFieldsValue({ tip: parseInt(bookingDetails.pricing.tip_amount) });
  }, []);

  const handleModifyBooking = () => {
    dispatch(
      modifyBookingReqAction({
        tip: data.tip,
        slug: bookingDetails.slug
      })
    );
  };

  return (
    <div className="site-card-border-less-wrapper booking-details">
      <Row>
        <Col span={24}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end"
              }}
            >
              <h2>Modify Booking</h2>
              <button className="btnclose" onClick={() => handleBookingDetails()}>
                <i class="fa fa-times"></i>
              </button>
            </div>
          </Col>
          <Row gutter={[16, 16]}>
            <Col>
              {bookingDetails.canBeCancelled && (
                <PButton pname="Send Receipt" onClick={() => dispatch(getReceiptsReqAction(bookingDetails.slug))} />
              )}
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xl={24} xs={24}>
              <b>Therapy Type</b>
            </Col>
            <Col xl={8} xs={24}>
              <label>Modality</label>
            </Col>
            <Col xl={10} xs={24}>
              <Select
                defaultValue={bookingDetails.modality_description}
                onChange={value => setData({ ...data, modality_id: value })}
              >
                {!isEmpty(modalitySelections) &&
                  modalitySelections.map(modality => <Option value={modality.id}>{modality.description}</Option>)}
              </Select>
            </Col>
            <Col xl={6} xs={24}>
              <PButton
                pname="Save"
                className="save"
                onClick={() =>
                  dispatch(
                    modifyManagerSpecialityReqAction({
                      slug: bookingDetails.slug,
                      id: data.modality_id
                    })
                  )
                }
              />
            </Col>
          </Row>
          <Divider />
          <Duration timezone={timezone} id={data.modality_id} paid_by={data.paid_by} />
          <Divider />
          <Form form={formRef} onFinish={handleModifyBooking}>
            <Row gutter={[16, 16]}>
              <Col xl={24} xs={24}>
                <b>Tip</b>
              </Col>
              <Col xl={6} xs={24}>
                <label>Add Tip</label>
              </Col>
              <Col xl={12} xs={24}>
                <Form.Item name="tip" rules={[{ required: true, message: "Please Enter Tip Amount!" }]}>
                  <PInput vType="number" name="tip" onChange={e => setData({ ...data, tip: e.target.value })} />
                </Form.Item>
              </Col>
              <Col xl={6} xs={24}>
                <PButton pname="Save" className="save" htmlType="submit" />
              </Col>
            </Row>
          </Form>
          <Divider />
          <PaymentType />
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(ModifyBooking);
