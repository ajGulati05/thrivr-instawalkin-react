import React from "react";
import { ReactComponent as CalenderIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as UsersGroup } from "../../assets/images/users-group.svg";
import { ReactComponent as DayCalenderIcon } from "../../assets/images/day-calendar.svg";
import { IconUser, IconSignOut, IconReview } from "../../assets/icons";

export const navMenuData = [
  {
    _tag: "NavItem",
    mobileName:"Day",
    name: "Dashboard",
    to: "/dashboard",
    icon: <DayCalenderIcon />,
    routerSwitch: true
  },
  {
    _tag: "NavItem",
     mobileName:"Calendar",
    name: "Calendar",
    to: "/calender",
    icon: <CalenderIcon />,
    routerSwitch: true
  },
  {
    _tag: "NavItem",
    name: "Clients",
     mobileName:"Clients",
    to: "/Clients",
    icon: <UsersGroup />,
    routerSwitch: true
  },
  {
    _tag: "NavItem",
    name: "Reviews",
     mobileName:"Reviews",
    to: "/reviews",
    icon: <IconReview className="review" />,
    routerSwitch: true
  }
];

export const navRoleBlockedMenuData = [
  {
    _tag: "NavItem",
    name: "Dashboard",
     mobileName:"Dashboard",
    to: "/dashboard",
    icon: <DayCalenderIcon />,
    routerSwitch: true
  },
  {
    _tag: "NavItem",
    name: "Reviews",
     mobileName:"Reviews",
    to: "/reviews",
    icon: <IconReview />,
    routerSwitch: true
  }
];

export const userMenuData = {
  _tag: "NavDropdown",
  name: "firstname",
  to: "/account",
  icon: <IconUser />,
  _children: [
    {
      _tag: "ChildNavItem",
      name: "Sign Out",
      to: "/logout",
      icon: <IconSignOut />,
      option: "usermenu",
      routerSwitch: false
    }
  ]
};
