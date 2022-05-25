import React from 'react';
import CowItem from './CowItem.jsx';


const CowList = (props) => {


  return(

      <div className='cowList'>
        <h3>This is the cow list</h3>

    {props.cows.map(cow => <CowItem key = {cow.id} cow = {cow} clickPop = {props.clickAndToggle} />)}




  </div>
  );

}










export default CowList;