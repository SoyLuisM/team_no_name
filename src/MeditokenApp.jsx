import React, { Component } from "react";

export class MeditokenApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const user = { email };
    console.log(user);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Wallet Key</label>
          <input
            type="name"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

