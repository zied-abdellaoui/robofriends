import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops,That is not good</h1>;
    }
    return this.props.children;
  }
}
