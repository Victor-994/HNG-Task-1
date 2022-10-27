require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  const slackUsername = "Victor_494"
  const backend = true
  const age = 28
  const bio = "I am a former finance specialist looking for a career change to tech"
  res.send({ slackUsername, backend, age, bio })
})

app.listen(port, () => {
  console.log(` Server running on port ${port}`)
})