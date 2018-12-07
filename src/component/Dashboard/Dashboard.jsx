import React, { Component } from 'react';
import House from '../House/House.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    axios
      .get('/api/houses')
      .then(res => {
        console.log(res)
        this.setState({
          houses: res.data
        })
      })
  }

	render() {
    let houseList = this.state.houses.map((house, i) => {
      return(
        <div key={i}>
          <House house={ house }/>
        </div>
      )
    })

		return(
      <div>
        <h1>Dashboard</h1>
        {houseList}
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
	  )
  }
}

export default Dashboard ;