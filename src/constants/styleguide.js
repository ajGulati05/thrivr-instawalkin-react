import { css } from "styled-components";

export const colorPalette = {
  //fiver collors 
 colorOne:"#F5CCBC",
colorTwo:"#daebf3",
colorThree:"#f2ede1",
colorFour:"#3C4042",
colorFive:"#F2F2F2",



  //five colors over
  mainDark1: "#001529",
  mainBackground: "#f8f9fa",
  footerBackground: "#f8f8f8",
  primary: "#a02b15",
  primaryDark: "#a02b15",
  primary1: "#1890ff",
  negative: "#ef5350",
  greyNegative: "rgba(239, 83, 80, 0.1)",
  cta: "#007aff",
  focusColor: "#82b1ff",
  success: "#00c853",
  greySuccess: "#e5f9ed",
  pending: "#ff9500",
  disabledBackground: "#f5f5f5",
  inputBorder: "#e0e0e0",
  placeholder: "#bdbdbd",
  muted: "#757575",
  tableUnknown: "#ecf6fe",
  amountPositive: "#388e3c",
  tableDark: "#e3f2fd",
  tableLight: "#f4faff",
  tableHover: "#fffbeb",
  tableSelect: "#d5ecff",
  white: "#ffffff",
  dashboardTealBlue: "#0097a7",
  dashboardFrenchBlue: "#3f51b5",
  dashboardPinkishOrange: "#ff6e40",
  overlay: "rgba(0, 0, 0, 0.38)",
  greyishBrown: "#424242",
  greyisGreen: "rgba(0, 200, 83, 0.12)",
  hover1: "rgb(245, 246, 248)"
};

export const textStyles = {
  symbolOrganizerGroupTitle: css`
    font-family: SFUIText;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: ${colorPalette.white};
  `,
  inputPlaceHolder: css`
    font-family: Roboto;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: italic;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  inputDefault: css`
    font-family: Roboto;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  datepickerDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  datepickerPlaceholder: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  datepickerPrefix: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  menuListHeadingDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: ${colorPalette.greyishBrown};
  `,
  menuListHeadingActive: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: ${colorPalette.primary};
  `,
  menusubItemactive: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.primary};
  `,
  dropdownDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #616161;
  `,
  dropdownActive: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.primary};
  `,
  dropdownLabel: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  dropdownDefaultValue: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  formElementLabelDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  formElementValueDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  formElementValueSuccess: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.success};
  `,
  inputElementValueDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  inputElementValueDisabled: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.41;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  inputElementPlaceHoder: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.41;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  inputElementCurreny: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: ${colorPalette.muted};
  `,
  textStyle_2: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.28px;
    color: ${colorPalette.greyishBrown};
  `,
  textStyle: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.greyishBrown};
  `,
  textPlaceHolderStyle: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  textIncStyle: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  menuListHeadingDefaultSmall: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.greyishBrown};
  `,
  menuListHeadingActiveSmall: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.23px;
    text-align: center;
    color: ${colorPalette.primary};
  `,
  menuSubItemDefaultSmall: css`
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  menuSubItemActiveSmall: css`
    font-family: Roboto;
    font-size: 11px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.primary};
  `,
  sidebarUserMenuDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.white};
  `,
  sidebarUserMenuItemDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.white};
  `,
  sidebarNavMenuItemDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  buttonPrimeReset: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.muted};
  `,
  buttonPrimeDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${colorPalette.cta};
  `,
  buttonSecondaryDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  tableHeadingDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${colorPalette.muted};
  `,
  tableAmountDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: ${colorPalette.muted};
  `,
  tableValueDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.greyishBrown};
  `,
  tableActionsDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.muted};
  `,
  tableStatusDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: ${colorPalette.active};
  `,
  tableScoreDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  aggregationTitleDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  aggregationHelperDefault: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  aggregationValueDefault: css`
    font-family: Roboto;
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: ${colorPalette.greyishBrown};
  `,
  // *******************
  // general text styles
  // *******************
  textNormalStyle: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `,
  sectionTitleDefault: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    color: ${colorPalette.muted};
  `,
  titleBigDefault: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.greyishBrown};
  `,
  placeholderTextMiddle: css`
    font-family: Roboto;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.placeholder};
  `,
  placeholderTextSmallBold: css`
    font-family: Roboto;
    font-size: 11px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${colorPalette.placeholder};
  `,
  generalItemTextDefault: css`
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.muted};
  `
};

export const spacings = {
  spacing_xxxs: "2px",
  spacing_xxs: "4px",
  spacing_xxss: "6px",
  spacing_xs: "8px",
  spacing_xss: "10px",
  spacing_s: "12px",
  spacing_sm: "14px",
  spacing_m: "16px",
  spacing_ml: "18px",
  spacing_l: "20px",
  spacing_xl: "24px",
  spacing_xxl: "28px",
  spacing_xxl_2: "32px",
  spacing_xxl_3: "36px",
  spacing_xxl_4: "48px",
  spacing_xxl_l: "64px"
};

export const layout = {
  sidebar: {
    default: 260,
    collapsed: 80,
    sidebarShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 0 0 0 rgba(0, 0, 0, 0.07), 0 0px 1px -1px rgba(0, 0, 0, 0.06)",
    brand: {
      height: 64,
      bgColor: colorPalette.primary
    },
    menu: {
      itemHeight: 46
    }
  },
  footer: {
    default: 42,
    borderTop: `solid 1px ${colorPalette.inputBorder}`
  },
  header: {
    defaultWidth: "calc(100vw - 260px)",
    collapsedWidth: "calc(100vw - 80px)"
  }
};
