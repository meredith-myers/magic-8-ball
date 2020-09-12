import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <h1>Magic 8 Ball</h1>
      <form method="post">
        <label for="question">Type Your Question Below</label>
        <input type="text" id="question" name="question"></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default App;