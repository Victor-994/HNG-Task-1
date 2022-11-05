require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser')

// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({credentials:true, origin:true}));

app.get('/', (req, res) => {
  const slackUsername = "Victor_494"
  const backend = true
  const age = 28
  const bio = "I am a former finance specialist looking for a career change to tech"
  res.send({ slackUsername, backend, age, bio })
})

app.post('/', (req, res) => {
  const slackUsername = "Victor_494"
  const{ x, y, operation_type } = req.body;

  const Enum = {
    addition: "addition",
    subtraction: "subtraction",
    multiplication: "multiplication"
  }

  if (operation_type === Enum.addition){
    result = x + y;
  } else if (operation_type === Enum.subtraction) {
    result = x - y;
  } else if (operation_type === Enum.multiplication) {
    result = x * y;
  } else {
    return res.json(`${operation_type} is not a valid operation type`);
  }


  res.send({ slackUsername, operation_type:Enum[operation_type], result })
})



app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})