import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderStyles,
  FormInput,
  HeaderInput,
  SubmitButton
} from "./Header.styles";
import Menu from "../images/menu.png";
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
        <button
          style={{ height: "4rem", width: "4rem" }}
          onClick={() => this.props.setSidebarOpen(this.props.setSidebarOpen)}
        >
          <img
            style={{ height: "100%", width: "100%" }}
            alt="menu bar "
            src={Menu}
          />
        </button>
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
