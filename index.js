const express = require('express')
const app = express()

app.get('/*', (req, res) => res.redirect('https://tappfirst.herokuapp.com'))

app.listen(1234, () => console.log('Example app listening on port 1234!'))