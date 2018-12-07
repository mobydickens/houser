import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }

  //input for updating form on page two
  updateImage = (value) => {
    this.setState({
      image: value
    })
  }

	render() {
		return(
      <div>
        <div>Step Two</div>
        <input type="text" placeholder='image url' onChange={ (e) => this.udpateImage(e.target.value) } value={this.state.image}/>
        <Link to='/wizard/step1'><button>Previous Step</button></Link>
        <Link to='/wizard/step3'><button>Next Step</button></Link>
      </div>
	  )
  }
}

export default StepTwo;