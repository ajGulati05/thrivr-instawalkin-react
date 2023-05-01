import styled from "styled-components";
import { Layout } from "antd";

const { Content, Footer, Header } = Layout;

export const LayoutContainer = styled(Layout)`
  height: ${({ isIOS }) => (isIOS ? "88vh" : "100vh")};
  height: auto;
  min-height: 100vh;
  main {
    padding: ${props => {
      return props.type === "no_sidebar" ? "0px" : " 65px 15px 15px 15px";
    }};
    background: #ededed;
    height: auto;
    min-height: 100vh;
    @media only screen and (max-width: 649px) {
      padding: ${props => {
        return props.type === "no_sidebar" ? "0px" : " 15px 15px 65px 15px";
      }};
    }
  }
`;

export const MainContainer = styled(Content)`
  background: ${({ theme }) => theme.colors.mainBackground};
  /* max-height: 100%; */
  height: ${({ isIOS }) => (isIOS ? "88vh" : "100vh")};
  /* z-index: 0; */
  padding-left: ${({ theme, type }) => type !== "no_sidebar" && theme.spacings.spacing_xl};
  padding-right: ${({ theme, type }) => type !== "no_sidebar" && theme.spacings.spacing_xl};
  padding-top: ${({ theme, type }) => type !== "no_sidebar" && theme.spacings.spacing_xl};
  padding-bottom: ${({ theme, type }) => type !== "no_sidebar" && theme.spacings.spacing_xl};
  padding-top: ${({ type }) => type !== "no_sidebar" && "88px"};
  @media only screen and (max-width: 649px) {
    padding: ${({ type }) => type !== "no_sidebar" && "24px"};
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  & .feeprofile-new-modal {
    position: absolute;
  }
  @media only screen and (max-width: 649px) {
    padding-top: ${props => {
      return props.type === "no_sidebar" ? "0px" : "50px";
    }};
  }
`;

export const FooterContainer = styled(Footer)`
  height: ${({ theme }) => theme.footer.footerHeight}px;
  border-top: ${({ theme }) => theme.footer.borderTop};
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0px;
`;

export const HeaderContainer = styled(Header)`
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 0;
`;
