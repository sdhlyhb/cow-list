import React from 'react';



 class UpdateCow extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       updatedName: '',
       updatedDescription: ''

     }
   }


   updateCowName(e) {
     this.setState({updatedName: e.currentTarget.value});
   }

   updateDescription(e) {
     this.setState({updatedDescription: e.currentTarget.value});
   }

   handleSubmit(e) {
     e.preventDefault();
     this.props.updateCow(Number(this.props.updatedCowId), this.state.updatedName, this.state.updatedDescription);



   }


   render(){
    return (
      <div >
        <h3>Update cow info</h3>
        <form id="update-cow-form">
          <label>Current ID: {this.props.updatedCowId}</label>
          <br></br>
          <label>
            Name:

            <input type="text" name="name" placeholder="new name..." onChange = {(e) => {this.updateCowName(e)}}/>
          </label>
          <br></br>


          <label>
            Description:

            <textarea type="text" name="description" placeholder="new description..." rows="5" onChange = {(e) => {this.updateDescription(e)}}/>
          </label>
          <br></br>
          <button type="submit" onClick = {this.handleSubmit.bind(this)}>submit updates</button>
          {/* <span className="close-icon" onClick = {e => {props.toggle(e)}}>X</span> */}



        </form>




      </div>
    );
  }

 };

export default UpdateCow;