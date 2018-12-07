import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepThree, clearState } from '../ducks/reducer';
import axios from 'axios';

class StepThree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: this.props.monthly_mortgage,
      desired_rent: this.props.desired_rent
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.monthly_mortgage !== this.state.monthly_mortgage || prevState.desired_rent !== this.state.desired_rent) {
      console.log('ComponentDidUpdate!');
    }
  }
  //inputs for updating form
  updateMortgage = (value) => {
    this.setState({
      monthly_mortgage: value
    })
  }
  updateRent = (value) => {
    this.setState({
      desired_rent: value
    })
  }

  addHouse = () => {
    axios
      .post('/api/house', { 
        property_name: this.props.property_name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zipcode: this.props.zipcode,
        // image: this.props.image,
        monthly_mortgage: this.state.monthly_mortgage,
        desired_rent: this.state.desired_rent
      })
      .then(res => {
        this.props.clearState();
      })
  }

	render() {
		return(
      <div>
        <input type="text" placeholder='0' onChange={ (e) => this.updateMortgage(e.target.value) } value={this.state.monthly_mortgage}/>
        <input type="text" placeholder='0' onChange={ (e) => this.updateRent(e.target.value) } value={this.state.desired_rent}/>
        <Link to='/wizard/step2'><button onClick={ () => this.props.stepThree(this.state.monthly_mortgage, this.state.desired_rent) }>Previous</button></Link>
        <Link to='/'><button onClick={ () => this.addHouse() }>Complete</button></Link>
      </div>
	  )
  }
}


function mapStateToProps( state ) {
  return {
    monthly_mortgage: state.monthly_mortgage,
    desired_rent: state.desired_rent,
    property_name: state.property_name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode,
    // image: this.props.image
  }
}

export default connect(mapStateToProps, { stepThree, clearState } )(StepThree) ;

// property_name, address, city, state, zipcode, image, monthly_mortgage, desired_rent need to be passed into req.body