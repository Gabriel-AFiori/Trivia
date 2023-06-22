import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    username: '',
    disabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validateForm());
  };

  validateForm = () => {
    const { email, username } = this.state;
    const min = 3;
    const higher = 7;
    const validadeInputs = username.length >= min
    && email.length >= higher
    && email.includes('@');
    this.setState({ disabled: !validadeInputs });
  };

  render() {
    const { email, username, disabled } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form>
          <input
            name="username"
            value={ username }
            onChange={ this.handleChange }
            type="text"
            placeholder="Username"
            data-testid="input-player-name"
          />
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="email"
            placeholder="Email"
            data-testid="input-gravatar-email"
          />
          <input
            type="submit"
            disabled={ disabled }
            value="Play"
            data-testid="btn-play"
          />
        </form>
      </>
    );
  }
}

export default Login;