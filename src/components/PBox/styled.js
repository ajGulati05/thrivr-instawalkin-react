import styled from "styled-components";

export const PBoxContainer = styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.07), 0 2px 1px -1px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ padding }) => padding};
  margin-top: ${({ mTop }) => mTop};
  margin-bottom: ${({ mBottom }) => mBottom};
  margin-left: ${({ mLeft }) => mLeft};
  margin-right: ${({ mRight }) => mRight};
  padding-top: ${({ pTop }) => pTop};
  padding-bottom: ${({ pBottom }) => pBottom};
  padding-left: ${({ pLeft }) => pLeft};
  padding-right: ${({ pRight }) => pRight};
`;
