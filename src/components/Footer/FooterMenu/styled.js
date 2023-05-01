import styled from "styled-components";

export const FooterMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacings.spacing_m};
  padding-right: ${({ theme }) => theme.spacings.spacing_xxl_2};
`;

export const MenuTitle = styled.span`
  ${({ theme }) => theme.footer.footerMenu.textStyle}
  padding-left: ${({ theme }) => theme.spacings.spacing_xxs}
`;
