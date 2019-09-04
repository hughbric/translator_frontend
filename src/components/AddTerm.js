import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTerm extends Component {
  state = {
    term: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTerm(this.state.term);
    this.setState({ name: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type='text'
          name='term'
          style={{ flex: "10" }}
          placeholder='Add Term'
          value={this.state.term}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Translate'
          className='btn'
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTerm.propTypes = {
  addTerm: PropTypes.func.isRequired
};

export default AddTerm;
