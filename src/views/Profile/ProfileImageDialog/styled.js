import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  & .ant-modal-content {
    width: 50%;
    margin: 0 auto;
    .ant-modal-header {
      padding: ${({ theme }) => theme.spacings.spacing_xxl};
      ${({ theme }) => theme.spacings.spacing_xl};
      border-bottom: 0px;
      .ant-modal-title {
        ${({ theme }) => theme.textStyles.sectionTitleDefault}
      }
    }
    .ant-modal-close {
      .ant-modal-close-x {
        height: 70px;
        width: 70px;
        line-height: 70px;
      }
    }
    .ant-modal-body {
      padding: ${({ theme }) => theme.spacings.spacing_xs} ${({ theme }) => theme.spacings.spacing_xxl}
        ${({ theme }) => theme.spacings.spacing_xl};
      ${({ theme }) => theme.spacings.spacing_xxl};
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const FooterContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacings.spacing_xl};
  display: flex;
  justify-content: flex-end;
`;
