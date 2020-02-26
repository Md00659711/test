import React,{Component}from 'react';
import ReactDom from 'react-dom';
import './Demo.css';
import 'tachyons';
import Pro from './Pro';


class Demo extends Component {
	
	constructor(props){
		
		
		super();
		this.state={
			
			name: "IT PROFILES"
		}
	}
		
  namechange() {
	  this.setState({ name: "MY HOME"
  })}
	render (){
		
	const arraylist = [
	{
		id:1,
         name:'MANISH DHANIK',
		work:'WEB DEVLOPER'
		
	},
	{
		id:2,
		name:'GOVIND DHANIK',
		work:'HARDWARE AND  NETWORKING'
		
	},
	{
		id:3,
		name:'MUKESH DASILA',
		work:'CUSTUMER SERVICE  ASSOCIATE '
		
		
	}
	]
	
	const arraycard = arraylist.map( (arraycard,i) => {
		return  <Pro id="i" name={arraylist[i].name} work={arraylist[i].work}/>
	
	
	}	)
 return (<div>
 <h1 className="tc green"> {this.state.name
 } </h1>
 {arraycard}  <br/>
 <button className="tc green ma4 grow shadow-4 " onClick ={() =>  this.namechange()} > click  more  </button >
	  </div>)
	  
	  
	  
	}  
}


export default Demo; 