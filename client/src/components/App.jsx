import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Magic 8 Ball</h1>
        </div>
        <div id="form">
          <form method="post">
            <label for="question">Type Your Question Below</label>
            <input type="text" id="question" name="question"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default App;