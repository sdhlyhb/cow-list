import React, {component} from 'react';
import AddCow from './AddCow.jsx';
import CowList from './CowList.jsx';
import ClickedCow from './ClickedCow.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allCows : [],
      currentClickedCowData: null,
      popUpSeen: false

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
    .then(this.getAll())
    .catch(err=> console.log('ERR! Can not add a new cow! '))

  };

  togglePop() {
    this.setState(
      {popUpSeen: !this.state.popUpSeen}
    )
  };










  render() {
    return (
      <div>
        <h1>Welcome to the COW LIST</h1>

     {this.state.popUpSeen? <ClickedCow toggle = {this.togglePop.bind(this)}/> : null}

      <AddCow handleAddition = {this.addNew.bind(this)}/>

      <CowList cows = {this.state.allCows} toggle = {this.togglePop.bind(this)}/>

      </div>

    );
  }

}

export default App;