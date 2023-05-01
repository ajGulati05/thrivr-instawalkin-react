import React, { useEffect } from "react";
import { Card, Row, Col, Menu } from "antd";
import { withTheme } from "styled-components";
import { FormControl } from "../Registration/styled";
import AddNewDropdown from "../../components/AddNewDropdown";
import ChartContainer from "../../components/ChartContainer";
import { addChartToUiAction, getChartsReqAction } from "../../store/actions/charts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Charts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const charts = useSelector(({ charts: { charts } }) => charts);

  useEffect(() => {
    const id = history.location.hash.split("#/")[1];
    dispatch(getChartsReqAction({ instauuid: id }));
  }, [dispatch, getChartsReqAction]);

  function handleMenuClick({ key }) {
    dispatch(addChartToUiAction({ type: key }));
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="CC">Chief Complaint</Menu.Item>
      <Menu.Item key="BC">Body Chart</Menu.Item>
      <Menu.Item key="SOAP">SOAP</Menu.Item>
    </Menu>
  );

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={12}>
                <h2 className="chart-entries-header">Chart Entries</h2>
              </Col>
              <Col span={12} justify="right">
                <FormControl>
                  <AddNewDropdown label="Add New Chart" trigger="click" menu={menu} handleMenuClick={handleMenuClick} />
                </FormControl>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                {charts.data.map((chart) => {
                  const { id, chart_type, locked, created_at, data, loading } = chart;
                  return (
                    <ChartContainer
                      key={id}
                      id={id}
                      type={chart_type}
                      locked={locked}
                      createdAt={created_at}
                      data={chart_type === "CC" ? data : JSON.parse(data)}
                      newChart={chart.newChart ? chart.newChart : false}
                      loading={loading}
                    />
                  );
                })}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default withTheme(Charts);
