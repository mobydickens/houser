import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepOne } from '../ducks/reducer';

class StepOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      property_name: this.props.property_name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.property_name 
        !== this.state.property_name 
        || prevState.address !== this.state.address
        || prevState.city !== this.state.city
        || prevState.state !== this.state.state
        || prevState.zipcode !== this.state.zipcode) {
      console.log('updating!');
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
    let regex = /(\D)+/;
    if (value.match(regex)) {
      this.setState({
        zipcode: this.props.zipcode,
      })
      alert('Please input only numbers!');
    } else {
        this.setState({
          zipcode: value
      })
    }
  }

	render() {
    let { property_name, address, city, state, zipcode } = this.state
		return(
      <div>
        <div className="inputs">
          <label htmlFor="property name">Property Name</label><br/>
          <input size='30' type="text" onChange={ (e) => this.updateName(e.target.value) } value={this.state.property_name}/><br/>
          <label htmlFor="address">Address</label><br/>
          <input size='70' type="text" onChange={ (e) => this.updateAddress(e.target.value) } value={this.state.address}/><br/>
          <label size='30' htmlFor="city">City</label><br/>
          <input type="text" onChange={ (e) => this.updateCity(e.target.value) } value={this.state.city}/><br/>
          <label htmlFor="State">State</label><br/>
          <input size='10'type="text" onChange={ (e) => this.updateState(e.target.value) } value={this.state.state}/><br/>
          <label htmlFor="Zipcode">Zipcode</label><br/>
          <input type="text" onChange={ (e) => this.updateZipcode(e.target.value) } value={this.state.zipcode}/><br/>
        </div>
        <div className="next-buttons">
          <Link to='/wizard/step2'><button className='next' onClick={ () => this.props.stepOne(property_name, address, city, state, zipcode) }>Next Step</button></Link>
        </div>
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

export default connect(mapStateToProps, { stepOne } )(StepOne);