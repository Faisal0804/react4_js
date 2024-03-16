import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class SetState extends Component {
    constructor(props){
        super()
        this.state={
          make: "Yamaha",   
          model: "MT15",   
          color: "Gray"   

        };


    }

     changeColor= () =>{
        this.setState({
            model: "fz",
            color: "blue"
        });

         

    }

  render() {
    return (
      <div>
        <h1>{this.state.make}</h1>
        <h1>{this.state.model}</h1>
        <h1>{this.state.color}</h1>
        <Button onClick={this.changeColor}>change color</Button>
      </div>
    )
  }
}

export default SetState