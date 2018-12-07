import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Route } from 'react-router-dom';
import StepOne from '../StepOne.jsx';
import StepTwo from '../StepTwo.jsx';
import StepThree from '../StepThree.jsx';

class Wizard extends Component {

	render() {
		return(
      <div>
        <Route path='/wizard/step1' component={ StepOne }/>
        <Route path='/wizard/step2' component={ StepTwo }/>
        <Route path='/wizard/step3' component={ StepThree }/>
      </div>
	  )
  }
}

export default Wizard ;