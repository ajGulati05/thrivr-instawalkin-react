import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${({ theme, ptop }) => (ptop ? ptop : theme.spacings.spacing_m)};
  padding-bottom: ${({ theme, pbottom }) => (pbottom ? pbottom : theme.spacings.spacing_m)};
  display: flex;
`;

export const CrumbItem = styled.div`
  display: flex;
`;

export const CrumbText = styled.div`
  ${({ theme }) => theme.textStyles.sectionTitleDefault};
  color: ${({ theme, colorPlaceholder }) => colorPlaceholder && theme.colors.placeholder};
`;

export const IconWrap = styled.div`
  padding-left: ${({ theme }) => theme.spacings.spacing_m};
  padding-right: ${({ theme }) => theme.spacings.spacing_m};
`;
