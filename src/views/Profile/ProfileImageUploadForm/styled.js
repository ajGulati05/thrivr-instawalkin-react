import styled from "styled-components";

export const Container = styled.div``;

export const AvatarContainer = styled.div``;

export const UploadBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.spacing_m};
  border: solid 1px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.muted};
`;
