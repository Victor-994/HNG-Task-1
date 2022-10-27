import express from "express"
require('dotenv').config();


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  const slackUsername = "Victor_494"
  const backend = true
  const age = 28
  const bio = "I am a former finance specialist looking for a career change to tech"

  res.json({
    slackUsername: slackUsername,
    backend: backend,
    age: age,
    bio: bio
  })
})

app.listen(port, () => {
  console.log(` Server running on port ${port}`)
})