import styled from "styled-components";
import { spacings } from "../../constants/styleguide";

export const FooterContainer = styled.div`
  padding: 0 ${spacings.spacing_xl};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding-right: ${({ theme }) => theme.spacings.spacing_m};
`;

export const FooterMenuWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterIncContainer = styled.div`
  ${({ theme }) => theme.footer.inc.textStyle}
  position: absolute;
  right: 24px;
`;

export const PLink = styled.a`
  ${({ theme }) => theme.footer.inc.textStyle}
  font-weight: 500;
  text-decoration: underline;
  padding: 0 4px;
`;

export const TextLogo = styled.div`
  ${({ theme }) => theme.footer.inc.textStyle}
  font-size: 24px;
  font-weight: 600;
`;
