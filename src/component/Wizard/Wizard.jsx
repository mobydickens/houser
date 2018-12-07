import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StepOne from '../StepOne.jsx';
import StepTwo from '../StepTwo.jsx';
import StepThree from '../StepThree.jsx';
import { clearState } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard extends Component {

	render() {
		return(
      <div>
        <div className='main'>
          <div className='main-div'>
            <h1 className='listing-title'>Add New Listing</h1>
            <Link to='/'><button onClick={ () => this.props.clearState() } className='cancel'>Cancel</button></Link>
          </div>
          <Route path='/wizard/step1' component={ StepOne }/>
          <Route path='/wizard/step2' component={ StepTwo }/>
          <Route path='/wizard/step3' component={ StepThree }/>
        </div>
      </div>
	  )
  }
}

export default connect(null, { clearState })(Wizard);