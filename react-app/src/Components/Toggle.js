import React from "react";

const Toggle = ({isActive, setActive}) => {

  return (
    <div className='toggle'>
      <div className={!isActive ? 'toggle-body' : 'toggle-body active'}>
        <div className='toggle-switch' onClick={() => {
          setActive(!isActive);
        }}></div>
      </div>
    </div>
  );
}

export default Toggle;