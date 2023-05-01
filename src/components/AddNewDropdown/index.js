import React from "react";
import { Dropdown, Button, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const AddNewDropdown = ({ label = "Add New", menu, handleMenuClick, ...rest }) => {
  return (
    <Space style={{ float: "right", marginBottom: '1em' }}>
      <Dropdown overlay={menu} {...rest}>
        <Button style={{ borderRadius: "3px" }}>
          {label} <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default AddNewDropdown;
