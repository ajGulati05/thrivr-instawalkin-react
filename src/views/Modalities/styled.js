import styled from "styled-components";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export const Container = styled.div`
  min-height: calc(100vh - 160px);
`;

export const TabGroup = styled(Tabs)`
  & .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-nav-list {
    .ant-tabs-tab {
      .ant-tabs-tab-btn {
        ${({ theme }) => theme.textStyles.sectionTitleDefault}
      }
    }
    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.buttonClick};
      }
    }
  }
`;

export const TabPanel = styled(TabPane)``;
