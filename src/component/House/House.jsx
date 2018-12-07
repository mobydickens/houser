import React from 'react';

function House (props) {

	return(
    <div className='house-box'>
      <div className='picture dashboard-box'>
        <img className='img' src={props.house.image} alt="house"/>
      </div>
      <div className='address dashboard-box'>
        <p><b>Property Name:</b> {props.house.property_name}</p>
        <p><b>Address:</b> {props.house.address}</p>
        <p><b>City:</b> {props.house.city}</p>
        <p><b>State:</b> {props.house.state}</p>
        <p><b>Zip:</b> {props.house.zipcode}</p>
      </div>
      <div className='payments dashboard-box'>
        <p><b>Monthly Mortgage:</b></p> {props.house.monthly_mortgage.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })}
        <p><b>Desired Rent:</b></p>{props.house.desired_rent.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })}
      </div>
      <div className='dashboard-box'>
        <button className='x' onClick={ () => props.deleteHouseFn(props.id) }>X</button>
      </div>
    </div>
  )
}

export default House;

// ALTER TABLE table_name ADD COLUMN new_column_name TYPE;