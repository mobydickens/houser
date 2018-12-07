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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.image !== this.state.image) {
      console.log('ComponentDidUpdate!');
    }
  }

  //input for updating form on page two
  updateImage = (value) => {
    this.setState({
      image: value
    })
  }

	render() {
    console.log('image state', this.state.image)
		return(
      <div>
        <div>Step Two</div>
        <input type="text" onChange={ (e) => this.updateImage(e.target.value) } value={this.state.image}/>
        <Link to='/wizard/step1'><button onClick={ () => this.props.stepTwo(this.state.image) }>Previous Step</button></Link>
        <Link to='/wizard/step3'><button onClick={ () => this.props.stepTwo(this.state.image) }>Next Step</button></Link>
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