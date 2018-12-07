import React from 'react';

function House (props) {
  // console.log("props in house", props.houses)
	return(
    <div className='house-box'>
      <p>{props.house.property_name}</p>
      <p>{props.house.address}</p>
      <p>{props.house.city}</p>
      <p>{props.house.state}</p>
      <p>{props.house.zipcode}</p>
      <button onClick={ () => props.deleteHouseFn(props.id) }>Delete</button>
    </div>
  )
}

export default House;