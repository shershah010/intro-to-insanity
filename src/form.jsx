import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(event) {
    this.setState({username: event.target.value});
  }

  updatePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    this.props.submitForm(this.props.level, this.state.username, this.state.password);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          username:
          <input type="text" value={this.state.username} onChange={this.updateUsername} />
        </label>
        <label>
          password:
          <input type="password" value={this.state.password} onChange={this.updatePassword} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} 

export { Form }