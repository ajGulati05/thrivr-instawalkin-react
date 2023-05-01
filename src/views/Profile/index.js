import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PBox from "../../components/PBox";
import PersonalInformationForm from "./PersonalInformationForm";
import BiographicalForm from "./BiographicalForm";
import { Container, TabGroup, TabPanel } from "./styled.js";
import { getProfileReqAction } from "../../store/actions/profile";

const Profile = ({ theme }) => {
  const dispatch = useDispatch();
  const profileData = useSelector(({ profile: { profileData } }) => profileData);

  useEffect(() => {
    dispatch(getProfileReqAction());
  }, [dispatch]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <TabGroup defaultActiveKey="1" type="card" size="default">
          <TabPanel tab="Profile" key="1">
            <PersonalInformationForm profileData={profileData} />
          </TabPanel>
          <TabPanel tab="BIOGRAPHICAL" key="2">
            <BiographicalForm userData={profileData} />
          </TabPanel>
        </TabGroup>
      </Container>
    </PBox>
  );
};

export default withTheme(Profile);
