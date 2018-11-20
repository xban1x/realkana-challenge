import React, { Component, Fragment } from "react";
import Header from "./header";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
      </Fragment>
    );
  }
}
