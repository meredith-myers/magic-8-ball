import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storedQuestion: '',
      question: '',
      response: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({storedQuestion: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/')
    .then((response) => {
      console.log(response);
      this.setState({
        question: this.state.storedQuestion,
        response: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
    // alert('A question was submitted: ' + this.state.question);

    event.target.reset();
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Magic 8 Ball</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Please Enter Your Question<br></br>
          <input type="text" id="questionField" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.state.question}<br></br>
      {this.state.response}
      </div>
    )
  }
}

export default App;