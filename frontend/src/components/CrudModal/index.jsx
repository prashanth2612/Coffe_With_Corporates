import { Modal, Button } from "antd";
import React, { useState } from "react";

export default function DeleteModal() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    console.log("Confirmed deletion");
    setVisible(false); // Close the modal after confirming
  };

  const handleCancel = () => {
    console.log("Canceled deletion");
    setVisible(false); // Close the modal on cancel
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Delete Item
      </Button>
      <Modal
        title="Delete Confirmation"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </div>
  );
}
