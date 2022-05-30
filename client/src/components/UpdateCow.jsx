import React from 'react';



 class UpdateCow extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
        id: 0,
       updatedName: '',
       updatedDescription: ''

     }
   }


   updateCowName(e) {
     this.setState({updatedName: e.target.value});
   }

   updateDescription(e) {
     this.setState({updatedDescription: e.target.value});
   }

   handleSubmit(e) {
     e.preventDefault();
     this.props.updateCow(id = 1, this.state.updatedDescription, this.state.updatedDescription);



   }


   render(){
    return (
      <div >
        <h3>Update cow info</h3>
        <form id="update-cow-form">
          <label>Current ID: {this.state.id}</label>
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