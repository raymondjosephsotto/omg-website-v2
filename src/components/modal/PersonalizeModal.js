import React from "react";

import { Modal, Button } from "react-bootstrap";

import "../prefab-styles/PrefabStyles.scss";
import HeroCarousel from "../carousel/HeroCarousel";

const PersonalizeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading 3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="mx-auto py-5 px-5">
          <HeroCarousel />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PersonalizeModal;
