import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Select, Divider, Modal, Form } from "antd";
import { withTheme } from "styled-components";
import { modifyPaymentTypeReqAction } from "../../store/actions/bookings";
import PInput from "../../components/PInput";
import { isEmpty } from "lodash";
import PButton from "../../components/PButton";
import pNotification from "../../components/PNotification";

const { Option } = Select;
const PaymentType = () => {
  const [formRef] = Form.useForm();
  const bookingDetails = useSelector(({ bookingDetails }) => bookingDetails.bookingDetails);
  const allpaymentTypes = useSelector(({ bookingDetails }) => bookingDetails.paymentType);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    paid_by: bookingDetails.paid_by,
    paid_by_2: bookingDetails.paid_by_2,
    amount_1: bookingDetails.splitPricing.amount_1,
    amount_2: bookingDetails.splitPricing.amount_2
  });
  const dispatch = useDispatch();
  const paymentTypes = allpaymentTypes?.filter(paymentType => paymentType.code !== data.paid_by_2);
  const paymentTypes2 = allpaymentTypes?.filter(paymentType => paymentType.code !== data.paid_by);

  useEffect(() => {
    formRef.setFieldsValue({ payment1: bookingDetails.paid_by });
    formRef.setFieldsValue({ payment2: bookingDetails.paid_by_2 });
    formRef.setFieldsValue({ amount2: bookingDetails.splitPricing.amount_2 });
  }, []);

  const handlePaymentType = () => {
    setIsModalVisible(false);
    const payload = {
      slug: bookingDetails.slug,
      data: {
        paid_by: data.paid_by,
        amount_1: data.amount_1,
        paid_by_2: data.paid_by_2,
        amount_2: data.amount_2
      }
    };

    if (data.paid_by === "CR") {
      data.card ? (payload.data.card_id = data.card.id) : (payload.data.card_id = bookingDetails.pricing.card_id);
    }

    if (
      data.amount_1 + data.amount_2 !== bookingDetails.total_amount + bookingDetails.pricing.tip_amount &&
      parseInt(bookingDetails.pricing.tip_amount)
    ) {
      pNotification({
        type: "error",
        message: "Amount Does not match with total amount!"
      });
    } else {
      dispatch(modifyPaymentTypeReqAction(payload));
    }
  };

  const handleModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Form form={formRef} onFinish={handleModal}>
      <Modal
        title="Payment"
        visible={isModalVisible}
        onOk={handlePaymentType}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Are you sure you want to change the amount ?</p>
      </Modal>
      <Row gutter={[16, 16]}>
        <Col xl={24} xs={24}>
          <b>Paid By</b>
        </Col>
        <Col xl={6} xs={24}>
          <label>Payment Type 1</label>
        </Col>
        <Col xl={16} xs={24}>
          <Form.Item name="payment1" rules={[{ required: true, message: "Please Select Payment Type 1!" }]}>
            <Select
              name="payment1"
              onChange={(value, option) =>
                setData({
                  ...data,
                  paid_by: value,
                  card: option.card && option.card
                })
              }
            >
              {paymentTypes.map(paymentType => (
                <Option value={paymentType.code}>{paymentType.description}</Option>
              ))}
              {!isEmpty(bookingDetails.client.creditcards) &&
                bookingDetails.client.creditcards.length > 0 &&
                bookingDetails.client.creditcards.map(card => (
                  <Option value="CR" card={card}>
                    {card.title}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xl={6} xs={24}>
          <label>Amount 1</label>
        </Col>
        <Col xl={12} xs={24}>
          <Form.Item rules={[{ required: true, message: "Please Enter Amount 1!" }]}>
            <PInput
              vType="number"
              name="amount1"
              value={data.amount_1}
              errorMessage={data.errorMessage}
              onChange={e =>
                setData({
                  ...data,
                  amount_1: e.target.value
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xl={6} xs={24}>
          <label>Payment Type 2</label>
        </Col>
        <Col xl={16} xs={24}>
          <Form.Item name="payment2" rules={[{ required: true, message: "Please Select Payment Type 2!" }]}>
            <Select placeholder="Select" onChange={value => setData({ ...data, paid_by_2: value })}>
              {paymentTypes2.map(paymentType => (
                <Option value={paymentType.code}>{paymentType.description}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xl={6} xs={24}>
          <label>Amount 2</label>
        </Col>
        <Col xl={12} xs={24}>
          <Form.Item name="amount2" rules={[{ required: true, message: "Please Enter Amount 2!" }]}>
            <PInput
              vType="number"
              name="amount2"
              value={data.amount_2}
              errorMessage={data.errorMessage}
              onChange={e =>
                setData({
                  ...data,
                  amount_2: e.target.value
                })
              }
            />
          </Form.Item>
        </Col>
        <Col xl={6} xs={24}>
          <PButton name="save" className="save" htmlType="submit" pname="Save" />
        </Col>
      </Row>
      <Divider />
    </Form>
  );
};

export default withTheme(PaymentType);
