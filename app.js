const routes = require("./routes/index")
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 8000 || process.env.PORT
// Set Up Middlewares
app.use(express.static('./public'))
app.set('view engine', 'ejs')
// global routes
app.use(bodyParser.urlencoded({ extended : false}))
app.use('', routes);

app.listen(PORT, () => {
    // 
    console.log(`The server is running on port : ${PORT}`)
});
