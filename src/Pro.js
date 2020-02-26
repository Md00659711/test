import React from 'react';
import 'tachyons';

  const Pro = (props) => {
	   return (<div className="bg-green dib tc ma4 grow shadow-4">
	 <img src="3.jpg" alt="Pro" />
	 <h1 className="tc ">  {props.name} </h1> 
	  <p className="tc">   {props.work}</p></div>)
  }
  
export default Pro;