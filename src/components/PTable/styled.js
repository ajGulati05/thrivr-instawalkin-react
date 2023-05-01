import styled from "styled-components";
import { Table } from "antd";

export const CustomizedTable = styled(Table)`
  & {
    table {
      .ant-table-thead {
        tr {
          th {
            background-color: white;
            text-align: center !important;
            ${({ theme }) => theme.components.tableStyles.heading.textStyle}
            padding: 10px 8px !important;
          }
        }
      }
      .ant-table-tbody {
        tr {
          cursor: ${({ rowClickableStyle }) => rowClickableStyle && "pointer"};
          td {
            padding: 6px 10px !important;
          }
        }
        tr:nth-child(odd) {
          background-color: ${({ theme }) => theme.colors.tableUnknown};
        }
        tr:nth-child(even) {
          background-color: ${({ theme }) => theme.colors.tableLight};
        }
        tr:last-child {
          background-color: ${({ theme, totals }) => totals && theme.colors.white};
          td {
            padding: ${({ totals }) => totals && "10px 8px !important"};
            ${({ theme, totals }) => totals && theme.components.tableStyles.heading.textStyle};
            span {
              font-weight: ${({ totals }) => totals && "bold !important"};
            }
          }
        }
      }
    }
  }
`;

export const PaginationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings.spacing_l};
  padding-left: ${({ theme }) => theme.spacings.spacing_xl};
  padding-right: ${({ theme }) => theme.spacings.spacing_xl};
`;

export const PagenationWrap = styled.div`
  display: flex;
`;

export const PageNumberWrap = styled.div`
  ${({ theme }) => theme.textStyles.generalItemTextDefault};
  color: ${({ theme }) => theme.colors.placeholders};
  padding-right: ${({ theme }) => theme.spacings.spacing_xl};
  & {
    input {
      text-align: center;
    }
  }
`;

export const PagePerRow = styled.div`
  padding-left: ${({ theme }) => theme.spacings.spacing_xl};
`;
