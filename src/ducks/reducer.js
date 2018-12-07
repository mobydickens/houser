let initialState = {
  property_name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  image: '',
  monthly_mortgage: '',
  desired_rent: ''
}

//ACTION TYPES
const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE'; 
const CLEAR_STATE = 'CLEAR_STATE'; 
//ACTION CREATORS

export function stepOne(property_name, address, city, state, zipcode) {
  return {
    type: STEP_ONE,
    payload: {
      property_name,
      address,
      city,
      state,
      zipcode
    }
  }
}

export function stepTwo(image) {
  return {
    type: STEP_TWO,
    payload: image
  }
}

export function stepThree(monthly_mortgage, desired_rent) {
  return {
    type: STEP_THREE,
    payload: {
      monthly_mortgage,
      desired_rent
    }
  }
}

export function clearState() {
  return {
    type: CLEAR_STATE,
    payload: ''
  }
}

//REDUCER
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case STEP_ONE:
      return { ...state, property_name: action.payload.property_name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode }
    case STEP_TWO:
      return { ...state, image: action.payload }
    case STEP_THREE:
      return { ...state, monthly_mortgage: action.payload.monthly_mortgage, desired_rent: action.payload.desired_rent }
    case CLEAR_STATE:
      return { ...initialState }
    default:
      return state;
  }
}