const express = require('express')
const app = express()
const port = 3000

const responses = ['Yes', 'No', 'Maybe', 'Why not?', 'What does your heart tell you?', 'Obviously'];

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.post('/', function (req, res) {
  const randomIndex = Math.floor(Math.random() * (responses.length));
  res.status(200).send(responses[randomIndex]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

/*
Additional Ideas
store questions per user to list on site when next visiting
render most popular questions on load
*/