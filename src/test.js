import { Component } from "react"
import React { Component} from "react"

class test extends Component{
render(){
    return (
      <div style={{ color: 'white', textAlign: 'center', backgroundColor: 'black', borderColor:'ActiveBorder' }}>
        <p>My name is: {fullName}</p>
        <p>I'm : {bio}</p>
        <p>I work: {profession}</p>
        <button onClick={()=> handleName (fullName)}>Click </button>
      </div>
    )
    }
}