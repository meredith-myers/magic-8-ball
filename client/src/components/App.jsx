import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storedQuestion: '',
      question: '',
      response: '',
      shaking: false,
      submittedAnswer: '',
      answerResponse: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  handleClick(event) {
    this.setState({shaking: true});
  }

  handleQuestionChange(event) {
    this.setState({storedQuestion: event.target.value});
  }

  handleAnswerChange(event) {
    this.setState({submittedAnswer: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.shaking);
    event.preventDefault();
    axios.post('/question')
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

  submitAnswer(event) {
    event.preventDefault();
    axios.post('/answer', {
      answer: this.state.submittedAnswer
    })
    .then((response) => {
      this.setState({
        answerResponse: `Answer submitted!`
      });
    })
    .catch((error) => {
      this.setState({
        answerResponse: `Error with answer submission.`
      })
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
            <input type="text" id="questionField" value={this.state.value} onChange={this.handleQuestionChange} />
          </label>
          <input type="submit" value="Submit" onClick = {this.handleClick}/>
        </form>

        <div id="ball">
          <p id="question">{this.state.question}</p>
          <br></br>
          <p id="answer">{this.state.response}</p>
        </div>

        <form onSubmit={this.submitAnswer}>
          <label>
            Submit An Answer Here<br></br>
            <input type="text" id="questionField" value={this.state.value} onChange={this.handleAnswerChange} />
          </label>
          <input type="submit" value="Submit" onClick = {this.handleClick}/>
        </form>
        <br></br>
        {this.state.answerResponse}
      </div>
    )
  }
}

export default App;

/*
Additional Ideas
Store previously asked questions on page
*/