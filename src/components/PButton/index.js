import React from "react";
import PropTypes from "prop-types";
import { CustomButton, ButtonText } from "./styled";
import { IconReset } from "../../assets/icons";
import { LoadingOutlined } from "@ant-design/icons";

const btnMainType = {
  reset: "reset",
  save: "save",
  default: "default",
  reject: "reject"
};

const PButton = ({
  ptype,
  pname,
  pspin,
  ploading,
  width,
  height,
  pleft,
  pright,
  pbottom,
  ptop,
  mleft,
  mright,
  mbottom,
  mtop,
  children,
  ...rest
}) => {
  return (
    <CustomButton
      ptype={ptype}
      height={height}
      width={width}
      pleft={pleft}
      pright={pright}
      ptop={ptop}
      pbottom={pbottom}
      mleft={mleft}
      mright={mright}
      mtop={mtop}
      mbottom={mbottom}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <React.Fragment>
          {ptype === btnMainType.reset && <IconReset />}
          <ButtonText ptype={ptype}>{pname}</ButtonText>
          {pspin && ploading && <LoadingOutlined />}
        </React.Fragment>
      )}
    </CustomButton>
  );
};

PButton.propTypes = {
  ptype: PropTypes.string,
  pname: PropTypes.string,
  pspin: PropTypes.bool,
  ploading: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  pleft: PropTypes.string,
  pright: PropTypes.string,
  ptop: PropTypes.string,
  pbottom: PropTypes.string,
  mleft: PropTypes.string,
  mright: PropTypes.string,
  mtop: PropTypes.string,
  mbottom: PropTypes.string,
  children: PropTypes.node
};

PButton.defaultProps = {
  ptype: btnMainType.default,
  pspin: false,
  ploading: false,
  pname: "BUTTON",
  height: "38px"
};

export default PButton;
