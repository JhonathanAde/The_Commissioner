import { createPortal } from 'react-dom'

import "./Modal.css"

const Modal = ({isVisible, hideModal}) => {

  return isVisible ? 
    createPortal(
      <>
      <div className="modal-overlay">
        <div className="moadl-wrapper" aria-modal={true} aria-hidden={true} tabIndex={-1} role="dialog">
          <div className="modal">
        <h5>Modal</h5>
        <button onClick={hideModal}>
          Close
        </button>
          </div>
        </div>
      </div>
      </>
      ,
      document.body,
    )
    : null;
};

export default Modal;