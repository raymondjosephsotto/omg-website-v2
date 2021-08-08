import React from 'react';

import { Modal, Button } from "react-bootstrap";

import "../prefab-styles/PrefabStyles.scss";

const OptimizeModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading 2
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="responsive-video">
            <div class="inner">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EUrUfJW1JGk?autoplay=1 "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default OptimizeModal;
