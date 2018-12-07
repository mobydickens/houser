import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepThree } from '../ducks/reducer';
import axios from 'axios';

class StepThree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monthly_mortgage: '',
      desired_rent: ''
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
      .post('/api/house', this.state)
      .then(res => {
        console.log('house added!');
      })
  }

	render() {
		return(
      <div>
        <div>Step Three</div>
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
    desired_rent: state.desired_rent
  }
}

export default connect(mapStateToProps, { stepThree } )(StepThree) ;