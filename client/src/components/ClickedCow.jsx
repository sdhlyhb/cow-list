import React from 'react';

const ClickedCow = (props) => {
  return (
    <div className="clicked-cow">
      <h2>This is the selected cow:</h2>
      <span className="close-icon" onClick = {e => {props.toggle(e)}}>X</span>
      <span>Name: {props.name}</span>
      <span>Description: {props.description}</span>

    </div>
  );
}

export default ClickedCow;