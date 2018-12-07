import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      property_name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  updateName = (value) => {
    this.setState({
      property_name: value
    })
  }
  updateAddress = (value) => {
    this.setState({
      address: value
    })
  }
  updateCity = (value) => {
    this.setState({
      city: value
    })
  }
  updateState = (value) => {
    this.setState({
      state: value
    })
  }
  updateZipcode = (value) => {
    this.setState({
      zipcode: value
    })
  }

	render() {
		return(
      <div>
        <h1>Wizard</h1>
        <input type="text" placeholder='Property name' onChange={ (e) => this.updateName(e.target.value) } value={this.state.property_name}/>
        <input type="text" placeholder='Address' onChange={ (e) => this.updateAddress(e.target.value) } value={this.state.address}/>
        <input type="text" placeholder='City' onChange={ (e) => this.updateCity(e.target.value) } value={this.state.city}/>
        <input type="text" placeholder='State' onChange={ (e) => this.updateState(e.target.value) } value={this.state.state}/>
        <input type="text" placeholder='Zipcode' onChange={ (e) => this.updateZipcode(e.target.value) } value={this.state.zipcode}/>
        <Link to='/'><button>Cancel</button></Link>
      </div>
	  )
  }
}

export default Wizard ;