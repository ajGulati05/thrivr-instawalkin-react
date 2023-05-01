import React from "react";
import { Row, Col } from "antd";
import PDatePicker from "../../components/PDatePicker";
import PTimePicker from "../../components/PTimePicker";
import PDropdown from "../../components/PDropdown";
import PInputSwitch from "../../components/PInputSwitch";
import PInput from "../../components/PInput";
import PButton from "../../components/PButton";

import PCard from "../../components/PCard";
import PCheckboxGroup from "../../components/PCheckboxGroup";
import PButtonSecondary from "../../components/PButtonSecondary";
import { MockCell, Heading, Amount, Value, Action, Status, Score } from "../../components/PTableElements";
import { PBoxWrapper, ElementSectionContainer, ElementSectionTitle, ElementGroup, ElementGroupTitle } from "./styled";
import { IconPlatformManagement, IconCustomerOperations } from "../../assets/icons";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const ElementsPage = () => {
  return (
    <React.Fragment>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>DatePicker Big, Default, Small</ElementSectionTitle>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={true} labelSmall={false} label="From" />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={true} labelSmall={false} label="To" />
              </Col>
            </Row>
          </ElementGroup>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={false} label="To" disabled />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={false} label="From" />
              </Col>
            </Row>
          </ElementGroup>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={false} labelSmall label="From" />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDatePicker showTime={false} labelSmall label="To" />
              </Col>
            </Row>
          </ElementGroup>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Time Picker</ElementSectionTitle>
          <ElementGroup>
            <PTimePicker />
          </ElementGroup>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Dropdown Label / Disabled</ElementSectionTitle>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDropdown label="Label" />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDropdown label="Label" disabled />
              </Col>
            </Row>
          </ElementGroup>
          <ElementSectionTitle>Dropdown Default / Disabled</ElementSectionTitle>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDropdown />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDropdown disabled />
              </Col>
            </Row>
          </ElementGroup>
          <ElementSectionTitle>Dropdown Checkbox list / Disabled</ElementSectionTitle>
          <ElementGroup>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <PDropdown showCheckbox={true} defaultValue="value1" />
              </Col>
              <Col className="gutter-row" span={6}>
                <PDropdown showCheckbox={true} defaultValue="value2" />
              </Col>
            </Row>
          </ElementGroup>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Input Switch</ElementSectionTitle>
          <ElementGroup>
            <PInputSwitch />
          </ElementGroup>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Input Default</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PInput defaultValue="Default input" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput defaultValue="Disabled input" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput errorStas={true} defaultValue="Error input" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput placeholder="Placeholder" />
            </Col>
          </Row>
          <ElementSectionTitle>Input Label</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PInput label="label" defaultValue="Default input" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" defaultValue="Disabled input" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" errorStas={true} defaultValue="Error input" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" placeholder="Placeholder" />
            </Col>
          </Row>
          <ElementSectionTitle>Input Label Currency</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PInput label="label" currencyName="USD" defaultValue="Default input" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" currencyName="USD" defaultValue="Disabled input" disabled />
            </Col>
          </Row>

          <ElementSectionTitle>Input Default Icon</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PInput defaultValue="Default input" suffix={<IconCustomerOperations />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput defaultValue="Disabled input" suffix={<IconCustomerOperations />} disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput errorStas={true} defaultValue="Error input" suffix={<IconCustomerOperations />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput placeholder="Placeholder" suffix={<IconCustomerOperations />} />
            </Col>
          </Row>

          <ElementSectionTitle>Input Label Icon</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PInput label="label" defaultValue="Default input" suffix={<IconPlatformManagement />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" defaultValue="Disabled input" suffix={<IconPlatformManagement />} disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" errorStas={true} defaultValue="Error input" suffix={<IconPlatformManagement />} />
            </Col>
            <Col className="gutter-row" span={6}>
              <PInput label="label" placeholder="Placeholder" suffix={<IconPlatformManagement />} />
            </Col>
          </Row>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Button Prime</ElementSectionTitle>
          <ElementSectionTitle>reset</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButton pname="RESET" ptype="reset" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton pname="RESET" ptype="reset" />
            </Col>
          </Row>
          <ElementSectionTitle>default</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButton />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton pspin ploading />
            </Col>
          </Row>
          <ElementSectionTitle>save</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButton ptype="save" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton ptype="save" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton ptype="save" pspin ploading />
            </Col>
          </Row>
          <ElementSectionTitle>reject</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButton ptype="reject" />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton ptype="reject" disabled />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButton ptype="reject" pspin ploading />
            </Col>
          </Row>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Button Secondary</ElementSectionTitle>
          <ElementSectionTitle>Button Secondary Left Align</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button default"
                psecondaryAlign="left"
                psecondary={<i className="fa fa-upload" />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="blue"
                pname="Button blue"
                psecondaryAlign="left"
                psecondary={<i className="fa fa-upload" />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="blue"
                pname="Button default"
                psecondaryAlign="left"
                psecondary={<i className="fa fa-upload" />}
                disabled
              />
            </Col>
          </Row>
          <ElementSectionTitle>with Check Mark</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button blue"
                psecondaryAlign="left"
                pwithCheck={true}
                pchecked={true}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button default"
                psecondaryAlign="left"
                pwithCheck={true}
                pchecked={false}
              />
            </Col>
          </Row>

          <ElementSectionTitle>Button Secondary Right Align</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button blue"
                psecondaryAlign="right"
                psecondary={<i className="fa fa-upload" />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="blue"
                pname="Button default"
                psecondaryAlign="right"
                psecondary={<i className="fa fa-upload" />}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="blue"
                pname="Button default"
                psecondaryAlign="right"
                psecondary={<i className="fa fa-upload" />}
                disabled
              />
            </Col>
          </Row>
          <ElementSectionTitle>with Check Mark</ElementSectionTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button blue"
                psecondaryAlign="right"
                pwithCheck={true}
                pchecked={true}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <PButtonSecondary
                ptype="default"
                pname="Button default"
                psecondaryAlign="right"
                pwithCheck={true}
                pchecked={false}
              />
            </Col>
          </Row>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Table Styles</ElementSectionTitle>
          <ElementGroupTitle>heading</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell comments="table/headingitem">
                <Heading>DATE</Heading>
              </MockCell>
            </Col>
          </Row>

          <ElementGroupTitle>amount</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/amount/positive">
                <Amount type="positive">+ 10.00</Amount>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/amount/negative">
                <Amount value={-20} decimalScale={2} />
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/amount/zero">
                <Amount value={0} />
              </MockCell>
            </Col>
          </Row>

          <ElementGroupTitle>value</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="left" comments="table/value/alignLeft" width="130px">
                <Value>05/01/2019, 23:52</Value>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/value/alignCenter" width="130px">
                <Value>05/01/2019, 23:52</Value>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/value/alignRight" width="130px">
                <Value>05/01/2019, 23:52</Value>
              </MockCell>
            </Col>
          </Row>

          <ElementGroupTitle>actions</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/actions/trash">
                <Action type="trash">
                  <i className="fa fa-trash-o" />
                </Action>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/actions/caret-down">
                <Action type="caretDown">
                  <i className="fa fa-caret-down" />
                </Action>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/actions/continue">
                <Action type="continue">Select</Action>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/actions/caret-up">
                <Action type="caretUp">
                  <i className="fa fa-caret-up" />
                </Action>
              </MockCell>
            </Col>
          </Row>

          <ElementGroupTitle>status</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/status/pending">
                <Status type="pending">Status</Status>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/status/active">
                <Status type="active">Status</Status>
              </MockCell>
            </Col>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="right" comments="table/status/error">
                <Status type="error">Status</Status>
              </MockCell>
            </Col>
          </Row>

          <ElementGroupTitle>score</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/score/pending">
                <Score type="pending" leftVal={10} rightVal={10} decimalScaleLeft={4} decimalScaleRight={2} />
              </MockCell>
            </Col>

            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/score/approved">
                <Score type="approved" leftVal={10} rightVal={10} decimalScaleLeft={4} decimalScaleRight={2} />
              </MockCell>
            </Col>

            <Col className="gutter-row" span={6}>
              <MockCell alignH="center" comments="table/score/rejected">
                <Score type="rejected" leftVal={10} rightVal={10} decimalScaleLeft={4} decimalScaleRight={2} />
              </MockCell>
            </Col>
          </Row>
        </ElementSectionContainer>
      </PBoxWrapper>

      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Cards</ElementSectionTitle>
          <ElementGroup>
            <PCard size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </PCard>
          </ElementGroup>
        </ElementSectionContainer>
      </PBoxWrapper>
      <PBoxWrapper>
        <ElementSectionContainer>
          <ElementSectionTitle>Group Checkboxes</ElementSectionTitle>
          <ElementGroupTitle>heading</ElementGroupTitle>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <MockCell comments="table/headingitem">
                <PCheckboxGroup options={options} defaultValue={["Pear"]}></PCheckboxGroup>
              </MockCell>
            </Col>
          </Row>
        </ElementSectionContainer>
      </PBoxWrapper>
    </React.Fragment>
  );
};

export default ElementsPage;
