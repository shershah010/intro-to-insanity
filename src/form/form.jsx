import React from 'react';
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';

import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '', 
      invalidUsername: false, 
      invalidPassword: false
    };

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
    this.setState({invalidUsername: this.state.username === ''});
    this.setState({invalidPassword: this.state.password === ''});
    if (!this.state.invalidUsername || !this.state.invalidPassword) {
      this.props.onFormSubmit(this.props.level, this.state.username, this.state.password);  
    }
    // event.preventDefault();
  }
  
  render() {
    return (
      <form 
        onSubmit={this.handleSubmit} 
        noValidate >

        <TextField
          required
          classes={{ root: 'spacing' }}
          id="username" 
          label="Username" 
          variant="filled"
          error={this.state.invalidUsername}
          helperText={this.state.invalidUsername ? "Required" : ""}
          value={this.state.username}
          onChange={this.updateUsername} />

        <br />

        <TextField 
          required
          classes={{ root: 'spacing' }}
          id="password" 
          label="Password"
          variant="filled"
          type="password"
          error={this.state.invalidPassword}
          helperText={this.state.invalidPassword ? "Required" : ""}
          value={this.state.password}
          onChange={this.updatePassword} />

         <br />

        <Button 
          variant="contained"
          classes={{ root: 'spacing' }} 
          color="primary"
          onClick={this.handleSubmit}>
          Submit
        </Button>
        
      </form>
    );
  }
} 

export { Form }