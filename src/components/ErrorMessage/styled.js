import styled from "styled-components";

export const FormatMessage = styled.div`
  padding: ${({ padding }) => padding || "8px"};
  ${({ pLeft }) => pLeft && `padding-left: ${pLeft}`};
  ${({ pRight }) => pRight && `padding-right: ${pRight}`};
  ${({ mLeft }) => mLeft && `margin-left: ${mLeft}`};
  ${({ mRight }) => mRight && `margin-right: ${mRight}`};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-weight: normal;
  z-index: 2;
  color: ${({ theme }) => theme.colors.negative};
  opacity: 1;
  border-radius: 2px;
  ${({ elmMode }) => elmMode && "background-color: #ffffff"};
  ${({ elmMode }) => elmMode && "box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1)"};
`;

export const MessageWrap = styled.div`
  padding-left: 6px;

  & p {
    font-family: Roboto;
    font-weight: normal;
    line-height: normal;
    font-size: 12px;
    margin-bottom: 0;
  }
`;
