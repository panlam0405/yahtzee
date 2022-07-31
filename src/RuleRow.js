import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let { description,score } = this.props;
    return (
      <tr className={this.props.score >= 0 ?"RuleRow RuleRow-disabled":"RuleRow RuleRow-active"} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{score !== undefined? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;