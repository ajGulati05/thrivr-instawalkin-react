import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const ImgUploadCrop = ({ handleUpload }) => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList, file: newFile }) => {
    setFileList(newFileList);
    handleUpload(newFile);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default ImgUploadCrop;
