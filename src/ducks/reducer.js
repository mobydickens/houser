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
const STEP_ONE = 'STEP_ONE'
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

//REDUCER
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case STEP_ONE:
      return { ...state, property_name: action.payload.property_name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zipcode: action.payload.zipcode }
    default:
      return state;
  }
}