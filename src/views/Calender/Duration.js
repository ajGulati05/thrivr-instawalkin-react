import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Select, Divider, Modal, Form } from "antd";
import { produce } from "immer";
import moment from "moment-timezone";
import { withTheme } from "styled-components";
import PDatePicker from "../../components/PDatePicker";
import { getAllSubModalitiesReqAction, getTherapistSubModalitiesReqAction } from "../../store/actions/modalities";
import { modifyBookingReqAction, createBookingReqAction } from "../../store/actions/bookings";
import PTimePicker from "../../components/PTimePicker";
import { isEmpty } from "lodash";
import PButton from "../../components/PButton";
const { Option } = Select;

const Duration = ({ timezone, id, paid_by }) => {
  moment.tz.setDefault(timezone);
  const [formRef] = Form.useForm();
  const bookingDetails = useSelector(({ bookingDetails }) => bookingDetails.bookingDetails);
  const errors = useSelector(({ bookingDetails }) => bookingDetails.error);
  const allSubModalities = useSelector(({ modalities: { allSubModalities } }) => allSubModalities);
  const therapistSubModalities = useSelector(({ modalities: { therapistSubModalities } }) => therapistSubModalities);
  const therapistSubModalitiesSelections = therapistSubModalities.map(
    i => allSubModalities.filter(item => item.code === i)[0]
  );
  const allDurations = useSelector(({ duration: { allDurations } }) => allDurations);
  const therapistDurations = useSelector(({ duration: { therapistDurations } }) => therapistDurations);
  const therapistDurationsSelections = therapistDurations.map(i => allDurations.filter(item => item.id === i)[0]);
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);
  const [slug, setSlug] = useState("");
  const [values, setValues] = useState({
    submodalities: null
  });
  const [data, setData] = useState({
    tip: parseInt(bookingDetails.pricing.tip_amount),
    paid_by: bookingDetails.paid_by,
    project_id: bookingDetails.project.id,
    sub_modalities: "",
    sub_modalitie: bookingDetails.addOns,
    defaultvalue: "",
    start_datetime: bookingDetails.start_datetime
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubModalitiesReqAction());
    dispatch(getTherapistSubModalitiesReqAction());
  }, [dispatch]);

  useEffect(() => {
    if (showError) {
      setError(errors?.errors);
    }
    if (isEmpty(errors) && showError) {
      dispatch(
        modifyBookingReqAction({
          id: bookingDetails.client.id,
          delete_id: slug
        })
      );
    }
  }, [errors, bookingDetails]);

  useEffect(() => {
    formRef.setFieldsValue({ tip: parseInt(bookingDetails.pricing.tip_amount) });
    formRef.setFieldsValue({ date: moment(bookingDetails.start_datetime) });
    const defaultvalue = [];
    if (!isEmpty(bookingDetails.addOns)) {
      let currentSubmodalites = "";
      allSubModalities.filter(sub_modalitie => {
        bookingDetails.addOns.map((i, x) => {
          if (!currentSubmodalites) {
            if (bookingDetails.addOns[x]["sub-description"] === sub_modalitie.description)
              currentSubmodalites = sub_modalitie.code;
            defaultvalue.push({ label: sub_modalitie.description, value: sub_modalitie.code });
          } else {
            if (bookingDetails.addOns[x]["sub-description"] === sub_modalitie.description) {
              currentSubmodalites = currentSubmodalites + "," + sub_modalitie.code;
              defaultvalue.push({ label: sub_modalitie.description, value: sub_modalitie.code });
            }
          }
        });
      });
      setData((data["defaultvalue"] = defaultvalue));

      setData({ ...data, sub_modalities: currentSubmodalites });
      formRef.setFieldsValue({ subModality: defaultvalue });
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(therapistSubModalities)) {
      setValues(
        produce(values, draft => {
          draft.submodalities = therapistSubModalities;
        })
      );
    }
  }, [therapistSubModalities]);

  const handleSaveBooking = () => {
    setShowError(true);
    setSlug(bookingDetails.slug);
    const { start_datetime } = data;
    let endDate;
    const projectData = therapistDurationsSelections.find(element => element.id === data.project_id);
    let numMatch = projectData?.mobile_name.match(/(\d+)/);
    endDate = moment(start_datetime).add(+numMatch?.[0], "minutes");
    if (!isEmpty(data.sub_modalitie)) {
      const finalEndTime = data.sub_modalitie.reduce((final, time) => {
        if (time?.minutes) {
          return moment(final).add(time?.minutes, "minutes");
        }
        return final;
      }, endDate);
      endDate = finalEndTime;
    }
    endDate = moment(endDate).format();

    const payload = {
      params: {
        project_id: data.project_id,
        modality_id: id,
        id: bookingDetails.client.id,
        slug: bookingDetails.slug
      },
      data: {
        app_source: "TPANEL",
        start: moment.tz(data.start_datetime, timezone).format(),
        end: moment.tz(endDate, timezone).format(),
        paid_by: data.paid_by
      }
    };
    if (data.paid_by === "CR") {
      data.card ? (payload.data.card_id = data.card.id) : (payload.data.card_id = bookingDetails.pricing.card_id);
    }
    if (data.sub_modalities) {
      payload.data.sub_modalities = data.sub_modalities;
    }
    dispatch(createBookingReqAction(payload));
  };

  return (
    <Form form={formRef} onFinish={handleSaveBooking}>
      <Row gutter={[16, 16]}>
        <Col xl={24} xs={24}>
          <b>Duration and Date</b>
        </Col>
        <Col xl={8} xs={24}>
          <label>Treatment</label>
        </Col>
        <Col xl={16} xs={24}>
          <Select
            defaultValue={bookingDetails.project.description}
            onChange={value => setData({ ...data, project_id: value })}
          >
            {!isEmpty(therapistDurationsSelections) &&
              therapistDurationsSelections.map(duration => <Option value={duration.id}>{duration.description}</Option>)}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xl={8} xs={24}>
          <label>Time</label>
        </Col>
        <Col xl={16} xs={24} className="time-picker">
          <Form.Item
            name="date"
            validateStatus={(error?.start ? error.start : error?.error, "error")}
            help={error?.start ? error.start : error?.error}
          >
            <PDatePicker
              showTime={false}
              label=""
              value={moment(data.start_datetime)}
              onChange={dateValue => {
                const startDateString = moment(dateValue).format("DD-MM-YYYY");
                const startDate = moment(data.start_datetime);

                startDate.set({
                  date: startDateString.split("-")[0],
                  month: startDateString.split("-")[1] - 1,
                  year: startDateString.split("-")[2]
                });
                setData({
                  ...data,
                  start_datetime: startDate
                });
              }}
            />
          </Form.Item>

          <PTimePicker
            label="Time"
            value={moment(data.start_datetime, "HH:mm")}
            onSelect={value => {
              const timeString = moment(value).format("HH:mm");
              const start = moment(data.start_datetime);
              start.set({
                h: timeString.split(":")[0],
                m: timeString.split(":")[1]
              });
              setData({
                ...data,
                start_datetime: start
              });
            }}
            format="hh:mm"
          />
        </Col>
      </Row>
      {therapistSubModalities.length ? (
        <Row gutter={[16, 16]}>
          <Col xl={8} xs={24}>
            <label>Sub Modality</label>
          </Col>
          <Col xl={16} xs={24}>
            <Select
              mode="multiple"
              allowClear
              name="subModality"
              labelInValue
              value={data.defaultvalue}
              placeholder="Select Submodality"
              onChange={(value, option) => {
                let a = "";
                value.map((i, x) => (a = !a ? value[x].value : a + "," + value[x].value));
                setData({
                  ...data,
                  sub_modalities: a,
                  defaultvalue: value,
                  sub_modalitie: option.map(i => i.sub_modalitie)
                });
              }}
            >
              {!isEmpty(therapistSubModalitiesSelections) &&
                therapistSubModalitiesSelections.map(subModality => (
                  <Option key={subModality.code} value={subModality.code} sub_modalitie={subModality}>
                    {subModality.description}
                  </Option>
                ))}
            </Select>
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row gutter={[16, 16]}>
        <Col xl={6} xs={24}></Col>
        <Col xl={12} xs={24}></Col>
        <Col xl={6} xs={24}>
          <PButton pname="Save" className="save" htmlType="submit" />
        </Col>
      </Row>
    </Form>
  );
};

export default withTheme(Duration);
