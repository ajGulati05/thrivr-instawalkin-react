import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWindowDimensions } from "../../hooks";
import SideBarBrand from "./SideBarBrand";
import UserMenu from "./UserMenu";
import NavMenu from "./NavMenu";
import { SiderContainer, PerfectScrollContainer } from "./styled";
import { SIDEBAR_COLLAPSED } from "../../store/actions/ui";
import { getUserInfoRequestAction } from "../../store/actions/user";

const SideBar = () => {
  const dispatch = useDispatch();
  const { sidebarCollapsed } = useSelector(state => state.ui);
  const userInfo = useSelector(({ user: { userInfo } }) => userInfo);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const collapsed = width < 1050 ? true : false;
    dispatch({
      type: SIDEBAR_COLLAPSED,
      payload: collapsed
    });
  }, [dispatch, width]);

  useEffect(() => {
    dispatch(getUserInfoRequestAction());
  }, [dispatch]);

  return (
    <SiderContainer collapsed={sidebarCollapsed}>
      <PerfectScrollContainer options={{ suppressScrollX: true }}>
        <SideBarBrand />
        <UserMenu userInfo={userInfo} />
        <NavMenu />
      </PerfectScrollContainer>
    </SiderContainer>
  );
};

export default SideBar;
