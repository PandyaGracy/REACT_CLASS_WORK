import { Component } from "react";

class Props extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p style={{ color: this.props.color }}>
          Age: {this.props.age}
        </p>
      </div>
    );
  }
}

export default Props;
