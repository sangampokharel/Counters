import React, { Component } from 'react'

import logo from './logo.svg';
import Counters from './components/Counters';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {

  state={
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ],
    
}


handleIncrement=counter=>{
  // console.log(counter);
  const counters=[...this.state.counters];
 const index= counters.indexOf(counter);
 counters[index].value++;
 this.setState({
     counters
 })
}

handleDelete=(id)=>{
const filteredList= this.state.counters.filter(counter=>counter.id !==id);
this.setState({
    counters:filteredList
})
}

handleNavCount=()=>{
  const filteredNav=this.state.counters.filter(counter=>counter.value>0);
  return filteredNav.length;
}

handleDecrement=(id)=>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(id);
  counters[index].value--;
  this.setState({
    counters
  })
}

handleDisabled=()=>{
  this.state.counters.map(counter=>{
   if(counter.value===0){
      return true
   }else{
     return false;
   }
  })
}



  render(){
  return (
    <div className="App">
      <Navbar onNavCount={this.handleNavCount}/>
      <Counters onDelete={this.handleDelete} onIncrement={this.handleIncrement}  disabled={this.handleDisabled()}  onDecrement={this.handleDecrement} counters={this.state.counters} />
    </div>
  );
  }
}

export default App;
