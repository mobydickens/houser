import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepThree, clearState } from '../ducks/reducer';
import axios from 'axios';

class StepThree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: this.props.monthly_mortgage,
      desired_rent: this.props.desired_rent,
      done: false
    }
  }

  //inputs for updating form
  updateMortgage = (value) => {
    let regex = /(\D)+/;
    if (value.match(regex)) {
      this.setState({
        monthly_mortgage: this.props.monthly_mortgage,
      })
      alert('Please input only numbers!');
      } else {
      this.setState({
        monthly_mortgage: value
      })
    }
  }
  updateRent = (value) => {
    let regex = /(\D)+/;
    if (value.match(regex)) {
      this.setState({
        desired_rent: this.props.desired_rent,
      })
      alert('Please input only numbers!');
    } else {
      this.setState({
        desired_rent: value
      })
    }
  }

  addHouse = () => {
    axios
      .post('/api/house', { 
        property_name: this.props.property_name,
        address: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zipcode: this.props.zipcode,
        image: this.props.image,
        monthly_mortgage: this.state.monthly_mortgage,
        desired_rent: this.state.desired_rent
      })
      .then(res => {
        this.props.clearState();
        this.setState({
          done: true
        })
      })
  }

	render() {
		return(
      <div>
        { this.state.done ? <Redirect to='/'></Redirect> : 
          <div className='inputs'>
            <div className='rent'>Recommended Rent: $0</div>
            <label htmlFor="mortgage">Monthly Mortgage Amount</label><br/>
            <input size='87' type="text" placeholder='0' onChange={ (e) => this.updateMortgage(e.target.value) } value={this.state.monthly_mortgage}/><br/>
            <label htmlFor="rent">Desired Monthly Rent</label><br/>
            <input size='87' type="text" placeholder='0' onChange={ (e) => this.updateRent(e.target.value) } value={this.state.desired_rent}/>
            <div className="next-buttons-split">
              <Link to='/wizard/step2'><button className='next' onClick={ () => this.props.stepThree(this.state.monthly_mortgage, this.state.desired_rent) }>Previous</button></Link>
              <button className='next complete' onClick={ () => this.addHouse() }>Complete</button>
            </div> 
          </div>
        }
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
    image: state.image
  }
}

export default connect(mapStateToProps, { stepThree, clearState } )(StepThree) ;

// property_name, address, city, state, zipcode, image, monthly_mortgage, desired_rent need to be passed into req.body