import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepTwo } from '../ducks/reducer';

class StepTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image
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
      <div className='inputs'>
        <label htmlFor="image">Image URL</label><br/>
        <input size='87' type="text" onChange={ (e) => this.updateImage(e.target.value) } value={this.state.image}/><br/>
        <div className='next-buttons next-buttons-split'>
          <Link to='/wizard/step1'><button className='next' onClick={ () => this.props.stepTwo(this.state.image) }>Previous Step</button></Link>
          <Link to='/wizard/step3'><button className='next' onClick={ () => this.props.stepTwo(this.state.image) }>Next Step</button></Link>
        </div>
      </div>
	  )
  }
}

function mapStateToProps( state ) {
  return {
    image: state.image
  }
}

export default connect(mapStateToProps, { stepTwo } )(StepTwo) ;