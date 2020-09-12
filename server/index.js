const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const responses = ['Yes', 'No', 'Maybe', 'Why not?', 'What does your heart tell you?', 'Obviously', 'It will be so, and the cost will be great', 'Never, if only for our continued survival as a species', 'Your answer is written in dust on the dark side of the moon', 'Gouge thine eyes to see the truth. You will be glad you did'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

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