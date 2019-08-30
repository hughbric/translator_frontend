import React, { Component } from 'react'

export class TerminologyItem extends Component {
  render() {
    return (
      <div style={getStyle}>
        <p style={{flex: '1'}}>{ this.props.translation.term }</p>
        <p style={{flex: '1'}}>{ this.props.translation.pig_latin }</p>
        <button onClick={this.props.delTerm.bind(this, this.props.translation.id)} style={btnStyle}>X</button>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}

const getStyle = {
  display: 'flex',
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
}

export default TerminologyItem
