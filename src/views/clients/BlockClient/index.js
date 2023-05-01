import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import PInput from "../../../components/PInput";
import PButton from "../../../components/PButton";
import { blockClientReqAction } from "../../../store/actions/clients";

const BlockClient = ({ isModalVisible, showModal, clientDetails }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleCancel = () => {
    showModal(false);
  };

  const handleBlock = () => {
    const payload = {
      reason: value,
      id: clientDetails.id
    };
    dispatch(blockClientReqAction(payload));
    showModal(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleBlock}
        onCancel={handleCancel}
        footer={[<PButton disabled={value.length < 5} onClick={handleBlock} width="100%" pname="Block" />]}
      >
        <PInput onChange={e => setValue(e.target.value)} value={value} label="Reason" placeholder="Reason for block" />
      </Modal>
    </>
  );
};

export default BlockClient;
