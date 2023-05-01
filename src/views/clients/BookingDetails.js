import React from "react";
import { Card, Row, Col, Collapse, Divider } from "antd";
import { LockFilled } from "@ant-design/icons";
import momentTZ from "moment-timezone";
import { withTheme } from "styled-components";
import PButton from "../../components/PButton";
import { cancelBookingReqAction } from "../../store/actions/bookings";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import CovidForm from "./CovidForm";

const { Panel } = Collapse;

const BookingDetails = ({ handleBookingDetails, handleModifyBooking, handleCancelBooking }) => {
  const dispatch = useDispatch();
  const bookingDetails = useSelector(({ bookingDetails }) => bookingDetails.bookingDetails);

  const status =
    bookingDetails.status === "Cancelled" ||
    bookingDetails.status === "Rescheduled" ||
    bookingDetails.status === "Closed"
      ? true
      : false;

  const { client, project } = bookingDetails;
  return (
    !isEmpty(bookingDetails) && (
      <div className="site-card-border-less-wrapper booking-details">
        <Row>
          <Col span={24}>
            <Row gutter={16}>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end"
                  }}
                >
                  <h2>Booking Details</h2>
                  <button className="btnclose" onClick={() => handleBookingDetails()}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </Col>
              {bookingDetails.canBeModified && (
                <Col span={24}>
                  <Card bordered={false}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <PButton pname="Edit" onClick={handleModifyBooking} />
                      {bookingDetails.canBeCancelled && (
                        <PButton
                          pname="Cancel Booking"
                          onClick={() => {
                            dispatch(
                              cancelBookingReqAction({
                                slug: bookingDetails.slug,
                                modifier: "C"
                              })
                            );
                            handleCancelBooking("cancel");
                          }}
                        />
                      )}
                    </div>
                  </Card>
                </Col>
              )}
              <Col span={24}>
                <Collapse defaultActiveKey={["1"]} expandIconPosition="right" ghost>
                  <Panel header="Booking Info" key="1">
                    <Card bordered={false}>
                      <div>
                        <h5>{client.name}</h5>
                        <span>
                          <i className="fa fa-mobile" />
                          {client.phone}
                        </span>
                        <br />
                        <span>
                          <a href={`mailto:${client.email}`}>{client.email}</a>
                        </span>
                        <br />
                       {/* <span>
                          <i className="fa fa-credit-card" />
                          {client.creditcards && client.creditcards.length > 0
                            ? client.creditcards[0].title
                            : "No credit card on file"}
                        </span>*/}
                        <Divider />
                        <span>{bookingDetails && momentTZ(bookingDetails.start_datetime).format("LL")}</span>
                        <br />
                        <span>
                          {bookingDetails && momentTZ(bookingDetails.start_datetime).format("hh:mm A")} to{" "}
                          {momentTZ(bookingDetails.end).format("hh:mm A")}
                        </span>
                        <Divider />
                        <span>
                          {project.description} Massage ($
                          {project.pricing.total_amount})
                        </span>
                      </div>
                    </Card>
                  </Panel>
                  <Panel header="Billing Info" key="2">
                    <Card bordered={false}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <span>
                          Status: <b>{bookingDetails.status}</b>
                        </span>
                        {status && <LockFilled />}
                      </div>
                      <Divider />
                      {project && (
                        <div>
                          <span>
                            Amount ({project.description}) : <b>${project.pricing.amount}</b>
                          </span>
                          <br />
                          <span>
                            Tax ({project.pricing.taxlabel}): <b>${project.pricing.taxes}</b>
                          </span>
                          <br />
                          {project.pricing.discount && (
                            <>
                              <span>
                                Discount: <b>${project.pricing.discount}</b>
                              </span>
                              <br />
                            </>
                          )}
                          {!isEmpty(bookingDetails.addOns) && (
                            <span>
                              Add Ons: {bookingDetails.addOns[0]["sub-description"]}
                              <div style={{ display: "flex", fontSize: 10 }}>
                                {bookingDetails.addOns[0].minutes && (
                                  <span>
                                    Minutes: <b>{bookingDetails.addOns[0].minutes}</b>
                                  </span>
                                )}
                                {bookingDetails.addOns[0].price && (
                                  <span>
                                    Price: <b>{bookingDetails.addOns[0].price}</b>
                                  </span>
                                )}
                                {bookingDetails.addOns[0].tax && (
                                  <span>
                                    Tax: <b>{bookingDetails.addOns[0].tax}</b>
                                  </span>
                                )}
                                {bookingDetails.addOns[0].total > 0 && (
                                  <span>
                                    Total: <b>{bookingDetails.addOns[0].total}</b>
                                  </span>
                                )}
                              </div>
                            </span>
                          )}
                          {bookingDetails.pricing.tip_amount && (
                            <span>
                              Tip: <b>${bookingDetails.pricing.tip_amount}</b>
                            </span>
                          )}
                          <Divider />
                          <span>
                            Total:{" "}
                            {bookingDetails.pricing.tip_amount ? (
                              <b>
                                ${parseInt(project.pricing.total_amount) + parseInt(bookingDetails.pricing.tip_amount)}
                              </b>
                            ) : (
                              <b>${project.pricing.total_amount}</b>
                            )}
                          </span>
                          <Divider />
                          <span>
                            {bookingDetails.paid_by_description} : <b>${project.pricing.total_amount}</b>
                          </span>
                          {bookingDetails.paid_by_2_description && (
                            <>
                              <Divider />
                              <span>
                                {bookingDetails.paid_by_2_description} : <b>${project.pricing.total_amount}</b>
                              </span>
                            </>
                          )}
                        </div>
                      )}
                    </Card>
                  </Panel>
                  <Panel header="Covid Form" key="3" className="booking-covid">
                    {bookingDetails.covid_form && <CovidForm covidFormDetail={bookingDetails.covid_form} isBookingDetails={true} />}
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  );
};

export default withTheme(BookingDetails);
