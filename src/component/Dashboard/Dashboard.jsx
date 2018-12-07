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
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.getAllHouses();
  }

  componentWillUpdate(prevProps) {
    if(prevProps.data !== this.props.match.params) {
      return this.getAllHouses;
    }
  }

  getAllHouses = () => {
    axios
      .get('/api/houses')
      .then(res => {
        this.setState({
          houses: res.data
        })
      })
  }

  deleteHouse = (id) => {
    axios 
      .delete(`/api/house/${id}`)
      .then(res => {
        this.getAllHouses();
      })
  }

	render() {
    let houseList = this.state.houses.map((house, i) => {
      return(
        <div key={i}>
          <House house={ house } deleteHouseFn={ this.deleteHouse } id={ house.id }/>
        </div>
      )
    })

		return(
      <div className='main'>
        <div className='main-div'>
          <h1>Dashboard</h1>
          <Link to='/wizard/step1'><button className='prop-button'>Add New Property</button></Link>
        </div>
        <h5>Home Listings</h5>
        {houseList}
      </div>
	  )
  }
}

export default Dashboard ;