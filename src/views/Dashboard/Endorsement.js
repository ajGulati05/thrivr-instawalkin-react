import React from "react";
import { withTheme } from "styled-components";
import { Row, Col, Card } from "antd";

const Endorsement = ({ endorsement, data }) => {
  const endorsemntAnalytics = data.reviewStats && data.reviewStats.endorsemntAnalytics;
  const filterEndorsement =
    endorsement[0] &&
    endorsement.filter(item => endorsemntAnalytics && endorsemntAnalytics.some(i => i.endorsement_id === item.id));
  return (
    <Card>
      <h3>Endorsements</h3>
      <Row style={{ display: "block" }}>
        {filterEndorsement &&
          filterEndorsement.map(item => (
            <Col className="individual-endorsement" key={item.id}>
              <img style={{ width: 50 }} src={`${item.path}`}></img> <span>{item.name}</span>
              <span style={{ marginLeft: 10 }}>
                {endorsemntAnalytics.map(i => i.endorsement_id === item.id && i.endorsement)}
              </span>
            </Col>
          ))}
      </Row>
    </Card>
  );
};

export default withTheme(Endorsement);
