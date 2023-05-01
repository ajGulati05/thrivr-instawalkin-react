import React from "react";
import { Card, Row, Col, List } from "antd";
import { withTheme } from "styled-components";

const Bookings = ({ bookings, handleBookingDetails }) => {
  let list = bookings.all;

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={24}>
                <List
                  className="demo-loadmore-list"
                  itemLayout="horizontal"
                  dataSource={list}
                  renderItem={item => (
                    <List.Item>
                      <a onClick={() => handleBookingDetails(item, false)}>
                        {item.project.description} on {item.start}
                      </a>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(Bookings);
