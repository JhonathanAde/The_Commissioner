import React from "react";


const CloseButton = ({close}) => {


  return (
    <div className="close-button-container" onClick={close}>
      <svg id="close-button" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.36 446.36"><rect x="-32.86" y="217.23" width="565.71" height="65.53" transform="translate(-130.38 223.18) rotate(-45)" /><rect x="-32.86" y="217.23" width="565.71" height="65.53" transform="translate(223.18 -130.38) rotate(45)" /></svg>
    </div>
  )
}

export default CloseButton;