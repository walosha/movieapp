import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderStyles, FormInput, HeaderInput } from "./Header.styles";
import { fetchSearch } from "../actions";

class Header extends Component {
  state = { search: [] };

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
        </FormInput>
      </HeaderStyles>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.search };
};

export default connect(
  mapStateToProps,
  { fetchSearch }
)(Header);
