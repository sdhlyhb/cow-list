import React from 'react';



 class UpdateCow extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       updatedName: props.updatedCowData[0].name,
       updatedDescription: props.updatedCowData[0].description

     }
   }


   updateCowName(e) {
     if(e.currentTarget.value.length > 0) {
       this.setState({updatedName: e.currentTarget.value});
     }
   }

   updateDescription(e) {
     if(e.currentTarget.value.length > 0) {
       this.setState({updatedDescription: e.currentTarget.value});
     }

   }

   handleSubmit(e) {
     e.preventDefault();
     console.log(this.props.updatedCowData);
     this.props.updateCow(Number(this.props.updatedCowId), this.state.updatedName, this.state.updatedDescription);
     this.props.toggleUpdateWindowPop();



   }


   render(){
    return (
      <div >

        <form id="update-cow-form">
        <h3>Update cow info</h3>
          <label>Current ID: {this.props.updatedCowId}</label>
          <br></br>
          <label>
            Name:

            <input type="text" name="name" placeholder="new name..." defaultValue = {this.props.updatedCowData.name} onChange = {(e) => {this.updateCowName(e)}}/>
          </label>
          <br></br>


          <label>
            Description:

            <textarea type="text" name="description" placeholder="new description..." rows="5" onChange = {(e) => {this.updateDescription(e)}}/>
          </label>
          <br></br>
          <button type="submit" onClick = {this.handleSubmit.bind(this)}>submit updates</button>
          <span className="close-icon2" onClick = {e => {this.props.toggleUpdateWindowPop(e)}}>close</span>




        </form>




      </div>
    );
  }

 };

export default UpdateCow;