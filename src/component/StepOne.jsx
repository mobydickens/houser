import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StepOne extends Component {

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

  //inputs for updating form
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
    console.log("props in step one", this.props)
		return(
      <div>
        <div>Step One</div>
        <input type="text" placeholder='Property name' onChange={ (e) => this.updateName(e.target.value) } value={this.state.property_name}/>
        <input type="text" placeholder='Address' onChange={ (e) => this.updateAddress(e.target.value) } value={this.state.address}/>
        <input type="text" placeholder='City' onChange={ (e) => this.updateCity(e.target.value) } value={this.state.city}/>
        <input type="text" placeholder='State' onChange={ (e) => this.updateState(e.target.value) } value={this.state.state}/>
        <input type="text" placeholder='Zipcode' onChange={ (e) => this.updateZipcode(e.target.value) } value={this.state.zipcode}/>
        <Link to='/wizard/step2'><button>Next Step</button></Link>
      </div>
	  )
  }
}

function mapStateToProps( state ) {
  return {
    property_name: state.property_name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  }
}

export default connect(mapStateToProps, {} )(StepOne) ;