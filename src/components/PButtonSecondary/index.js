import React, { useState } from "react";
import PropTypes from "prop-types";
import PCheckbox from "../PCheckbox";
import { CustomButton, ButtonText, SecondaryWrapper } from "./styled";

const PButtonSecondary = ({
  pname,
  ptype,
  psecondary,
  psecondaryAlign,
  pwithCheck,
  pchecked,
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
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(pchecked);
  const onClick = () => {
    pwithCheck && setChecked(!checked);
    pwithCheck && onChange(!checked);
  };

  return (
    <CustomButton
      ptype={ptype}
      psecondary={psecondary}
      psecondaryalign={psecondaryAlign}
      pwithcheck={pwithCheck.toString()}
      pchecked={checked.toString()}
      height={height}
      width={width}
      onClick={onClick}
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
          {psecondaryAlign === "left" && (
            <SecondaryWrapper className="secondary-wrapper" ptype={ptype}>
              {!pwithCheck ? psecondary : <PCheckbox checked={checked} defaultChecked={pchecked} />}
            </SecondaryWrapper>
          )}
          <ButtonText className="button-text" ptype={ptype} pchecked={checked.toString()}>
            {pname}
          </ButtonText>
          {psecondaryAlign === "right" && (
            <SecondaryWrapper className="secondary-wrapper" ptype={ptype}>
              {!pwithCheck ? psecondary : <PCheckbox checked={checked} defaultChecked={pchecked} />}
            </SecondaryWrapper>
          )}
        </React.Fragment>
      )}
    </CustomButton>
  );
};

PButtonSecondary.propTypes = {
  pname: PropTypes.string,
  ptype: PropTypes.oneOf(["blue", "default"]),
  psecondary: PropTypes.node,
  psecondaryAlign: PropTypes.oneOf(["left", "right"]),
  pwithCheck: PropTypes.bool,
  pchecked: PropTypes.bool,
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

PButtonSecondary.defaultProps = {
  pname: "Button",
  ptype: "default",
  pwithCheck: false,
  pchecked: false,
  height: "24px"
};

export default PButtonSecondary;
