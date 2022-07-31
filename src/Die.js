import React, { Component } from "react";
import "./Die.css";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Die extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);

  }


  render() {
    
    const { val } = this.props;
    let die;
    if (val === 1)  die = faDiceOne;
    else if (val === 2)  die = faDiceTwo;
    else if (val === 3)  die = faDiceThree;
    if (val === 4)  die = faDiceFour;
    if (val === 5)  die = faDiceFive;
    if (val === 6) die = faDiceSix;
    let classes = 'Die';
    if (this.props.rolling)
      classes += ' Die-rolling'
    else classes = 'Die';
    if (this.props.locked) {
      classes += ' Die-locked'
    }
    return (
                <FontAwesomeIcon className={classes} icon ={die} 
        onClick={this.handleClick}/>
    );
  }
}

export default Die;
