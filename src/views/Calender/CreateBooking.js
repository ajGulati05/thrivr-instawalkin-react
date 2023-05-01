import React, { useState, useEffect } from "react";
import { Card, Row, Form, Col, Select, AutoComplete } from "antd";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllClientsReqAction } from "../../store/actions/clients";
import { createBookingReqAction } from "../../store/actions/bookings";
import moment from "moment-timezone";
import { isEmpty, set } from "lodash";
import PTimePicker from "../../components/PTimePicker";
import PDatePicker from "../../components/PDatePicker";
import PButton from "../../components/PButton";
import AddClient from "../clients/AddClient";
import pNotification from "../../components/PNotification";

const { Option } = Select;

const CreateBooking = ({ handleBookingDetails, startDate, timezone, bookings }) => {
  moment.tz.setDefault(timezone);
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();
  const errors = useSelector(({ bookingDetails }) => bookingDetails.error);
  const paymentTypes = useSelector(({ bookingDetails }) => bookingDetails.paymentType);

  const allModalities = useSelector(({ modalities: { allModalities } }) => allModalities);

  const therapistModalities = useSelector(({ modalities: { therapistModalities } }) => therapistModalities);

  const modalitySelections =
    !isEmpty(therapistModalities) && therapistModalities.map(i => allModalities.filter(item => item.id === i)[0]);

  const allSubModalities = useSelector(({ modalities: { allSubModalities } }) => allSubModalities);

  const therapistSubModalities = useSelector(({ modalities: { therapistSubModalities } }) => therapistSubModalities);

  const therapistSubModalitiesSelections =
    !isEmpty(therapistSubModalities) &&
    therapistSubModalities?.map(i => allSubModalities.filter(item => item.code === i)[0]);

  const allDurations = useSelector(({ duration: { allDurations } }) => allDurations);

  const therapistDurations = useSelector(({ duration: { therapistDurations } }) => therapistDurations);
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);

  const therapistDurationsSelections =
    !isEmpty(therapistDurations) &&
    !isEmpty(allDurations) &&
    therapistDurations.map(i => allDurations.filter(item => item.id === i)[0]);

  const [data, setData] = useState({
    project_id: 0,
    modality_id: 0,
    id: "",
    paid_by: "",
    client: {},
    search: "",
    addClient: false,
    sub_modalities: "",
    sub_modalitie: {},
    start_datetime: startDate
  });

  useEffect(() => {
    if (showError) {
      setError(errors?.errors);
    }
  }, [errors]);

  useEffect(() => {
    dispatch(getAllClientsReqAction({ search: "" }));
    setData({
      ...data,
      start_datetime: startDate
    });
  }, [dispatch]);

  // Therapist Duration Initial Value
  useEffect(() => {
    formRef.setFieldsValue({ date: moment(data.start_datetime) });
    if (!isEmpty(therapistDurations) && !isEmpty(therapistDurations)) {
      const therapistDurationsMountSelections = therapistDurations.map(
        i => allDurations.filter(item => item.id === i)[0]
      );
      formRef.setFieldsValue({
        duration: therapistDurationsMountSelections?.[0]?.id
      });
      setData({
        ...data,
        project_id: therapistDurationsMountSelections?.[0]?.id
      });
    }
  }, [therapistDurations, therapistDurations]);

  const allClients = useSelector(({ clients }) => clients.allClients);

  let clients = allClients && allClients.data && [...Object.keys(allClients.data)].map(i => allClients.data[i]);

  const handleCreateBooking = () => {
    setShowError(true);
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

    const payload = {
      params: {
        project_id: data.project_id,
        modality_id: data.modality_id,
        id: data.id
      },
      data: {
        app_source: "TPANEL",
        start: moment.tz(start_datetime, timezone).format(),
        end: moment.tz(endDate, timezone).format(),
        paid_by: data.paid_by
      }
    };
    if (!isEmpty(data.sub_modalities)) {
      payload.data.sub_modalities = data.sub_modalities;
    }

    if (data.paid_by === "CR") {
      payload.data.card_id = data.card.id;
    }
    dispatch(createBookingReqAction(payload));
  };

  return (
    <div className="site-card-border-less-wrapper create-booking">
      {!data.addClient ? (
        <Row>
          <Col span={24}>
            <Form form={formRef} onFinish={handleCreateBooking} initialValues={{ duration: "Select" }}>
              <Row gutter={16}>
                <Col span={24}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end"
                    }}
                  >
                    <h2>Create Booking</h2>
                    <button className="btnclose" onClick={() => handleBookingDetails()}>
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </Col>
                <Col span={24}>
                  <Card bordered={false}>
                    <Row gutter={16}>
                      <Col xl={8} xs={24}>
                        <label>Add Client</label>
                      </Col>
                      <Col xl={16} xs={24}>
                        <Form.Item name="client" rules={[{ required: true, message: "Please Select Client" }]}>
                          <AutoComplete
                            name="client"
                            placeholder="Search"
                            onSearch={value => {
                              setData({
                                ...data,
                                search: value
                              });
                              dispatch(getAllClientsReqAction({ search: value }));
                            }}
                            onSelect={(value, option) => {
                              setData({
                                ...data,
                                id: option.key,
                                client: option.client
                              });
                            }}
                            notFoundContent={
                              <a
                                onClick={() =>
                                  setData({
                                    ...data,
                                    addClient: true
                                  })
                                }
                              >
                                Add Client
                              </a>
                            }
                          >
                            {!isEmpty(clients) &&
                              clients.map(client => (
                                <Option key={client.id} client={client} value={client.name}>
                                  {client.name}
                                </Option>
                              ))}
                          </AutoComplete>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8} xs={24}>
                        <label>Payment</label>
                      </Col>
                      <Col xl={16} xs={24}>
                        <Form.Item name="payment" rules={[{ required: true, message: "Please Select Payment Option" }]}>
                          <Select
                            defaultValue="Select"
                            name="payment"
                            onChange={(value, option) =>
                              setData({
                                ...data,
                                paid_by: option?.card ? "CR" : value,
                                card: option.card && option.card
                              })
                            }
                          >
                            {paymentTypes.map(paymentType => (
                              <Option value={paymentType.code}>{paymentType.description}</Option>
                            ))}
                            {!isEmpty(data.client.creditcards) &&
                              data.client.creditcards.length > 0 &&
                              data.client.creditcards.map(card => (
                                <Option value={card?.id} card={card} key={card?.id}>
                                  {card.title}
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8} xs={24}>
                        <label>Treatment</label>
                      </Col>
                      <Col xl={16} xs={24}>
                        <Form.Item name="duration">
                          <Select style={{}} onChange={value => setData({ ...data, project_id: value })}>
                            {!isEmpty(therapistDurationsSelections) &&
                              therapistDurationsSelections.map(duration => (
                                <Option value={duration.id} key={duration.id}>
                                  {duration.description}
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ padding: "10px 0 15px" }}>
                      <Col xl={8} xs={24}>
                        <label>Time</label>
                      </Col>
                      <Col xl={{ offset: 0, span: 14 }} xs={{ offset: 0, span: 24 }} className="time-picker">
                        <Form.Item
                          name="date"
                          validateStatus={(error?.start && errors.start, "error")}
                          help={error?.start}
                        >
                          <PDatePicker
                            showTime={false}
                            name="date"
                            value={moment(data.start_datetime)}
                            onChange={dateValue => {
                              const startDateString = moment(dateValue).format("DD-MM-YYYY");
                              const startDate = moment(data.start_datetime);
                              setError();
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
                          format="HH:mm"
                          value={moment(data.start_datetime)}
                          minuteStep={15}
                          showNow={false}
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
                        />
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8} xs={24}>
                        <label>Modality</label>
                      </Col>
                      <Col xl={16} xs={24}>
                        <Form.Item name="modality" rules={[{ required: true, message: "Please Select Modality" }]}>
                          <Select
                            defaultValue="Select"
                            name="modality"
                            onChange={value => setData({ ...data, modality_id: value })}
                          >
                            {!isEmpty(modalitySelections) &&
                              modalitySelections.map(modality => (
                                <Option value={modality.id} key={modality?.id}>
                                  {modality.description}
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    {therapistSubModalities.length ? (
                      <Row gutter={16}>
                        <Col xl={8} xs={24}>
                          <label>Sub Modality</label>
                        </Col>
                        <Col xl={16} xs={24}>
                          <Select
                            mode="multiple"
                            allowClear
                            placeholder="Select Submodality"
                            onChange={(value, option) => {
                              let a = "";
                              value.map((i, x) => (a = !a ? value[x] : a + "," + value[x]));
                              setData({
                                ...data,
                                sub_modalities: a,
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

                    <PButton pname="Create" className="save" htmlType="submit" />
                  </Card>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      ) : (
        <AddClient name={data.search} />
      )}
    </div>
  );
};

export default withTheme(CreateBooking);
