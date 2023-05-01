import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PBox from "../../components/PBox";
import { Container, TabGroup, TabPanel } from "./styled.js";
import {
  getAllModalitiesReqAction,
  getAllSubModalitiesReqAction,
  getTherapistModalitiesReqAction,
  getTherapistSubModalitiesReqAction
} from "../../store/actions/modalities";
import ModalityForm from "./ModalityForm";
import _ from "lodash";
import SubmodalityForm from "./SubmodalityForm";

const Modalities = ({ theme }) => {
  const dispatch = useDispatch();
  const therapistModalities = useSelector(({ modalities: { therapistModalities } }) => therapistModalities);
  const allModalities = useSelector(({ modalities: { allModalities } }) => allModalities);
  const therapistSubModalities = useSelector(({ modalities: { therapistSubModalities } }) => therapistSubModalities);
  const allSubModalities = useSelector(({ modalities: { allSubModalities } }) => allSubModalities);
  const loading =
    therapistModalities &&
    Array.isArray(therapistModalities) &&
    allModalities &&
    Array.isArray(allModalities) &&
    therapistSubModalities &&
    Array.isArray(therapistSubModalities) &&
    allSubModalities &&
    Array.isArray(allSubModalities)
      ? false
      : true;
  const modalitySelections = _.map(allModalities, function(item) {
    return { label: item.description, value: item.id, img: item.image_path, code: item.code };
  });
  const submodalitySelections = _.map(allSubModalities, function(item) {
    return { label: item.description, img: item.image_path, code: item.code };
  });
  const mappedTherapistSubModalities =
    !loading && submodalitySelections.filter(item => therapistSubModalities.includes(item.code)).map(item => item.code);

  useEffect(() => {
    dispatch(getAllModalitiesReqAction());
    dispatch(getAllSubModalitiesReqAction());
    dispatch(getTherapistModalitiesReqAction());
    dispatch(getTherapistSubModalitiesReqAction());
  }, [dispatch]);

  return (
    <PBox padding={theme.spacings.spacing_xl}>
      <Container>
        <TabGroup defaultActiveKey="1" type="card" size="default">
          <TabPanel tab="MODALITIES" key="1">
            <ModalityForm checkboxGroup={modalitySelections} therapistModalities={therapistModalities} />
          </TabPanel>
          <TabPanel tab="SUB-MODALITIES" key="2">
            <SubmodalityForm
              checkboxGroup={submodalitySelections}
              therapistSubModalities={mappedTherapistSubModalities}
            />
          </TabPanel>
        </TabGroup>
      </Container>
    </PBox>
  );
};

export default withTheme(Modalities);
