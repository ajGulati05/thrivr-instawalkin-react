import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withTheme } from "styled-components";
import { AvatarContainer } from "./styled";

const ProfileImage = ({ theme, onClick, imageSrc, size }) => {
  return (
    <AvatarContainer onClick={onClick}>
      <Avatar src={imageSrc} icon={!imageSrc && <UserOutlined />} size={size || 270} />
    </AvatarContainer>
  );
};

ProfileImage.propTypes = {
  imageSrc: PropTypes.string,
  size: PropTypes.number
};

export default withTheme(ProfileImage);
