import React from "react";
import PropTypes from "prop-types";
import { Container, CrumbItem, CrumbText, IconWrap } from "./styled";
import { IconBreadCrumb } from "../../assets/icons";

const PBreadCrumb = ({ crumbs, ptop, pbottom }) => {
  return (
    <Container ptop={ptop} pbottom={pbottom}>
      {crumbs &&
        crumbs.map((crumb, index) => (
          <CrumbItem key={index}>
            <CrumbText colorPlaceholder={index < crumbs.length - 1}>{crumb}</CrumbText>
            {index < crumbs.length - 1 && (
              <IconWrap>
                <IconBreadCrumb />
              </IconWrap>
            )}
          </CrumbItem>
        ))}
    </Container>
  );
};

PBreadCrumb.propTypes = {
  crumbs: PropTypes.array,
  ptop: PropTypes.string,
  pbottom: PropTypes.string
};

export default PBreadCrumb;
