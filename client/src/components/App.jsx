import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storedQuestion: '',
      question: '',
      response: '',
      shaking: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    this.setState({shaking: true});
  }

  handleChange(event) {
    this.setState({storedQuestion: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.shaking);
    event.preventDefault();
    axios.post('/')
    .then((response) => {
      this.setState({
        question: this.state.storedQuestion,
        response: response.data,
        shaking: false
      });
      console.log(this.state.shaking);
    })
    .catch((error) => {
      console.log(error);
    });
    event.target.reset();
  }

  render() {
    return (
      <div id="container">
        <div id="title">
          <h1>Magic 8 Ball</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please Enter Your Question<br></br>
            <input type="text" id="questionField" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick = {this.handleClick}/>
        </form>

        <div id="ball">
          <p id="question">{this.state.question}</p>
          <br></br>
          <p id="answer">{this.state.response}</p>
        </div>
      </div>
    )
  }
}

export default App;

/*
Additional Ideas
Store previously asked questions on page
*/