import React from 'react';

import { Modal, Button } from "react-bootstrap";

const ConnectModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading 1
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Title</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quisquam aliquam nihil, commodi necessitatibus quod porro a quasi accusantium eum officia nemo molestiae odit pariatur quos numquam, explicabo fugit ad?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ConnectModal;