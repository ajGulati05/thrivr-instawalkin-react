import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.textStyles.aa}
  background: ${({ theme }) => theme.colors.success};
  font-size: ${({ actived }) => (actived ? "30px" : "14px")};
`;
