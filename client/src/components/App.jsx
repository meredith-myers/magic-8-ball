import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      response: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({question: event.target.value});
  }

  handleSubmit(event) {
    alert('A question was submitted: ' + this.state.question);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Magic 8 Ball</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Please Enter Your Question
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default App;