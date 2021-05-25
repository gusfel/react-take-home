const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/refresh', (req, res) => {
  axios.get('https://www.plugco.in/public/take_home_sample_feed')
    .then(response => {
      res.send('response.data')
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})