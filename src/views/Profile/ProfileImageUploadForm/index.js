import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import MainContainerContext from "../../../context/MainContainerContext";
import ProfileImage from "./ProfileImage";
import ProfileImageDialog from "../ProfileImageDialog";
import PButtonSecondary from "../../../components/PButtonSecondary";
import { Container, UploadBtn } from "./styled.js";
import { updateProfileImgReqAction } from "../../../store/actions/profile";

const ProfileImageUploadForm = ({ theme, imageSource, onSave }) => {
  const dispatch = useDispatch();
  const { getContainer } = useContext(MainContainerContext);
  const [open, setOpen] = useState(false);

  function handleOk() {
    setOpen(false);
  }

  const handleSave = image => {
    if (image) {
      if (onSave) {
        onSave(image);
      } else {
        let fromData = new FormData();
        fromData.append("avatar", image.originFileObj);
        dispatch(updateProfileImgReqAction(fromData));
      }
      setOpen(false);
    }
  };

  return (
    <Container>
      <ProfileImage imageSrc={imageSource} size={160} />
      <UploadBtn>
        <PButtonSecondary
          ptype="default"
          pname="Upload New Image"
          psecondaryAlign="right"
          onClick={() => setOpen(true)}
          psecondary={<i className="fa fa-camera" />}
        />
      </UploadBtn>
      {open && (
        <ProfileImageDialog
          open={open}
          handleOk={handleOk}
          getContainer={getContainer}
          handleCancel={handleOk}
          uploadImage={handleSave}
        />
      )}
    </Container>
  );
};

ProfileImageUploadForm.propTypes = {
  imageSource: PropTypes.string,
  onSave: PropTypes.func
};

export default withTheme(ProfileImageUploadForm);
