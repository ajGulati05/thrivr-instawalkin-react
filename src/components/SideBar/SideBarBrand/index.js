import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrandContainer, LogoContainer, Hamburger, TextLogo } from "./styled";
import { SIDEBAR_COLLAPSED } from "../../../store/actions/ui";

const SideBarBrand = () => {
  const dispatch = useDispatch();
  const { sidebarCollapsed } = useSelector(state => state.ui);

  const HamburgerMenu = () => <i className="fa fa-outdent"></i>;
  const HamburgerMenuCollapsed = () => <i className="fa fa-indent"></i>;

  return (
    <BrandContainer>
      <LogoContainer>
        <TextLogo>Thrivr</TextLogo>
      </LogoContainer>
      <Hamburger
        onClick={() =>
          dispatch({
            type: SIDEBAR_COLLAPSED,
            payload: !sidebarCollapsed
          })
        }
      >
        {sidebarCollapsed ? <HamburgerMenuCollapsed /> : <HamburgerMenu />}
      </Hamburger>
    </BrandContainer>
  );
};

export default SideBarBrand;
