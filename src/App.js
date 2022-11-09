import React, { useState } from "react";
import Timer from "./Timer";
import './App.css'


class App extends React.Component  {
  constructor() {
  super ()
   this.state={
   Fullname: "Moez" ,
   Profession: "ingénieur",
   Bio: "hello" ,
    Show: true ,
 }
  }


  butt = () => {
    this.setState({Show:!this.state.Show}) }

  
  
   render (){
   return (
    <div className="App">
      <button onClick={this.butt} >{this.state.Show ? "Hide Counter" : "Show Counter"}</button>
      { this.state.Show ?
      (<> <p> {this.state.Fullname} </p>
      <p>{this.state.Bio} </p>
      <p>{this.state.Profession}</p>
      <Timer/> </>) : null }
    </div> 
  );
}} 

export default App;