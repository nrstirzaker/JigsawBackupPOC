const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/Organisation',(req,res) =>{
    console.log(JSON.stringify(req.body));
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})