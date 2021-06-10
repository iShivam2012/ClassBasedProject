import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }
  componentDidCatch(error) {
    this.setState({
      isError: true,
    });
  }
  render() {
    if (this.state.isError) {
      return <p>Something went wrong!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
