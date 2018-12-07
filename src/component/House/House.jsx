import React from 'react';

function House (props) {
  // console.log("props in house", props.houses)
	return(
    <div className='house-box'>
      <div className='picture dashboard-box'>
        <img src={props.house.image} alt="house"/>
      </div>
      <div className='address dashboard-box'>
        <p>Property Name: {props.house.property_name}</p>
        <p>Address: {props.house.address}</p>
        <p>City: {props.house.city}</p>
        <p>State: {props.house.state}</p>
        <p>Zip: {props.house.zipcode}</p>
      </div>
      <div className='payments dashboard-box'>
        <p>Monthly Mortgage: {props.house.mortgage_amount}</p>
        <p>Desired Rent: {props.house.desired_rent}</p>
      </div>
      <div className='dashboard-box'>
        <button className='x' onClick={ () => props.deleteHouseFn(props.id) }>X</button>
      </div>
    </div>
  )
}

export default House;

// ALTER TABLE table_name ADD COLUMN new_column_name TYPE;