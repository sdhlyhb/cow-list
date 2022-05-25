import React from 'react';

const CowItem = (props) => {
  return(
    <li className='cowItem'>

        <span className="cow-name-span" onClick = {e => {props.clickPop(e)}}>{props.cow.name} </span>
        {":     "}
        <span className ='cow-des-span'>{props.cow.description}</span>

    </li>

  )

}

export default CowItem;