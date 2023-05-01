import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PButton from "../../../components/PButton";
import ImgUploadCrop from "../../../components/ImgUploadCrop";

import { CustomModal, FooterContainer } from "./styled.js";

const ProfileImageDialog = ({ theme, open, getContainer, handleCancel, uploadImage }) => {
  const [file, setFile] = useState();

  const handleSave = () => {
    uploadImage(file);
  };

  return (
    <CustomModal
      title="Upload a Profile Image"
      visible={open}
      onCancel={handleCancel}
      centered
      footer={null}
      getContainer={getContainer}
      width="100%"
      wrapClassName="feeprofile-new-modal"
    >
      <ImgUploadCrop handleUpload={setFile} />
      <FooterContainer>
        <PButton pname="SAVE" ptype="save" onClick={handleSave} disabled={!file} />
      </FooterContainer>
    </CustomModal>
  );
};

ProfileImageDialog.propTypes = {
  open: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
  getContainer: PropTypes.func,
  uploadImage: PropTypes.func
};

export default withTheme(ProfileImageDialog);
