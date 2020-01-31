import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderStyles,
  FormInput,
  HeaderInput,
  SubmitButton
} from "./Header.styles";
import { fetchSearch } from "../actions";

class Header extends Component {
  state = { search: "" };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchSearch(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <HeaderStyles>
        <FormInput onSubmit={this.onSubmit}>
          <HeaderInput
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
          <SubmitButton onSubmit={this.onSubmit}>Submit</SubmitButton>
        </FormInput>
      </HeaderStyles>
    );
  }
}

export default connect(null, { fetchSearch })(Header);
