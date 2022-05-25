import React from 'react';
// import axios from 'axios';


 class AddCow extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      //  id: 0,
       name: '',
       description: ''

     }
   }


   inputCowName(e) {
     this.setState({name: e.target.value});
   }

   inputDescription(e) {
     this.setState({description: e.target.value});
   }

   handleSubmit(e) {
     e.preventDefault();
     this.props.handleAddition(this.state.name, this.state.description);



   }


   render(){
    return (
      <div >
        <h3>This is the AddCow</h3>
        <form id="add-cow-form">
          <label>
            Name:

            <input type="text" name="name" placeholder="input a cow name..." onChange = {(e) => {this.inputCowName(e)}}/>
          </label>


          <label>
            Description:

            <textarea type="text" name="description" placeholder="input a cow's description..." rows="5" onChange = {(e) => {this.inputDescription(e)}}/>
          </label>
          <button type="submit" onClick = {this.handleSubmit.bind(this)}>Add a new cow</button>



        </form>




      </div>
    );
  }

 };

export default AddCow;