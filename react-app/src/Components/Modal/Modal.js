import ReactDom from 'react-dom'

import "./Modal.css"

export default function Modal({open, children, onClose, title, closeIcon}) {

  const modal_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000
  }


  const overlay_styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  if(!open) return null;

  return ReactDom.createPortal(
  <div className='modal-main'>
    <div className={!open ? "modal-overlay" : "modal-overlay active"}/>
    <div className='modal-body'>
      {children}
    </div>
  </div>,
  document.getElementById('portal')
  )
};
