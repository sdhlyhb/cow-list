import React, {component} from 'react';
import AddCow from './AddCow.jsx';
import CowList from './CowList.jsx';
import ClickedCow from './ClickedCow.jsx';
import UpdateCow from './UpdateCow.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCows : [],
      currentClickedCowData: null,
      updatedCow: null,
      popUpSeen: false,
      updateWindowPop: true

    }
  }


//display all the names
  componentDidMount() {
    this.getAll();


  }

  getAll() {
    axios.get('api/cows')
    .then(res => {
      let allCowsData = res.data;
      console.log('this is allCowsData:', res.data); // an array of objects
      this.setState({allCows: allCowsData});
    })
    .catch(err => console.log('ERR! Can not get all the cows data!'));

  };

  addNew(cowName, cowDescription) {
    let cowData = {name: cowName, description: cowDescription};
    axios.post('/api/cows', cowData)
    .then(res => {
      console.log('Success adding a new cow!');
      console.log('this is the res.data:', res.data);
    })
    .then(() => this.getAll())
    .catch(err=> console.log('ERR! Can not add a new cow! '))

  };

  togglePop() {
    this.setState(
      {popUpSeen: !this.state.popUpSeen}
    )
  };

  clickCowName(clickedName) {
    let matched = this.state.allCows.filter(ele => ele.name === clickedName);
    this.setState({
      currentClickedCowData: {id: matched[0].id, name: matched[0].name, description: matched[0].description},
      popUpSeen: !this.state.popUpSeen
    })
  };

  updateCow(id, newName, newDes) { //id will always be the same only name and decription will be updated;
    let updatedData = {id: id, name: newName, decription: newDes};
    axios.put(`api/cows/:${id}`, updatedData)
      .then(res => {
        console.log('Sucess update info:', res.data);
      })
      .then(() => getAll())
      .catch(err => console.log('Err updating!', err));




  };









  render() {
    return (
      <div>
        <h1>Welcome to the COW LIST</h1>

     {this.state.popUpSeen? <ClickedCow toggle = {this.togglePop.bind(this)} currentCow = {this.state.currentClickedCowData}/> : null}

      <AddCow handleAddition = {this.addNew.bind(this)}/>

      <CowList cows = {this.state.allCows} clickAndToggle = {this.clickCowName.bind(this)}/>

      {this.state.updateWindowPop? <UpdateCow updateCow = {this.updateCow.bind(this)}
      /> : null}

      </div>

    );
  }

}

export default App;