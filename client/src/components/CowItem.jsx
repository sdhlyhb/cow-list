import React from 'react';

const CowItem = (props) => {
  var curCowName = props.cow.name;
  var curCowId = props.cow.id;

  return(
    <li className='cowItem'>
      <span>ID_{props.cow.id}</span>
      {':   '}

        <span className="cow-name-span" onClick = {e => {props.clickPop(curCowName)}}>{props.cow.name} </span>
        <button>update</button>
        <button onClick = {e => {props.deleteCurCow(curCowId)}} >delete</button>

        {/* {":     "}
        <span className ='cow-des-span'>{props.cow.description}</span> */}

    </li>

  )

}

export default CowItem;