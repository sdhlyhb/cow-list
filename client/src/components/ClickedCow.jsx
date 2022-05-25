import React from 'react';

const ClickedCow = (props) => {
  return (
    <div className="clicked-cow">
      <h2>This is the selected cow:</h2>
      <span className="close-icon" onClick = {e => {props.toggle(e)}}>X</span>
      <span>NAME: {props.currentCow.name}</span>
      <br></br>
      <span>DESCRIPTION: {props.currentCow.description}</span>

    </div>
  );
}

export default ClickedCow;