import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ACTIVE_MENU_ITEM } from "../../../store/actions/ui";
import { MenuItemContainer, MenuItemText, IconWrap } from "./styled";
import Authentication from "../../../services/authentication";

const Auth = new Authentication();

const MenuItem = ({
  keyName,
  menuIcon,
  menuType,
  usage,
  menuTitle,
  sidebarCollapsed,
  menuItemObj,
  children,
  ...rest
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeMenuItem } = useSelector(state => state.ui);
  const menuEl = useRef(null);
  const [active, setActive] = useState(false);

  function switchRouter(route) {
    history.push(route);
  }

  const handleClick = () => {
    if (menuItemObj) {
      dispatch({
        type: ACTIVE_MENU_ITEM,
        payload: menuItemObj
      });

      if (menuItemObj.to === "/logout") {
            Auth.logout();
        history.push("/login");
      }

      menuItemObj.routerSwitch && switchRouter(menuItemObj.to);
    }
  };

  useEffect(() => {
    if (menuItemObj && activeMenuItem.to === menuItemObj.to) {
      setActive(true);
    } else {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenuItem]);

  return (
    <MenuItemContainer
      ref={menuEl}
      className="custom-menu-item"
      key={keyName}
      active={active}
      menutype={menuType}
      usage={usage}
      menutitle={menuTitle}
      collapsed={sidebarCollapsed}
      onClick={handleClick}
      {...rest}
    >
      <IconWrap>{menuIcon}</IconWrap>
      <MenuItemText>{children}</MenuItemText>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  keyName: PropTypes.string.isRequired,
  menuIcon: PropTypes.node,
  children: PropTypes.node,
  menuType: PropTypes.oneOf(["navMenu", "userMenu"]).isRequired,
  usage: PropTypes.oneOf(["parent", "child"]).isRequired,
  sidebarCollapsed: PropTypes.bool,
  menuTitle: PropTypes.string,
  menuItemObj: PropTypes.shape({
    _tag: PropTypes.string,
    name: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node,
    option: PropTypes.string,
    routerSwitch: PropTypes.bool
  })
};

MenuItem.defaultProps = {
  menuType: "navMenu",
  usage: "child",
  sidebarCollapsed: false,
  menuTitle: ""
};

export default MenuItem;
