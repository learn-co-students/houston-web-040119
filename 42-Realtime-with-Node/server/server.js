const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const pry = require('pryjs')
const Painting = require('./models/Painting')

const io = require('socket.io')()

// const socket = require('socket.io')
// const io = socket()

io.on('connection', socket => {

    socket.on('random', payload => {
        console.log(payload)
    })

    socket.on('message', async payload => {
        await console.log(payload)
        io.emit('message', payload)
    })

})

io.listen(8080)












const app = express()
app.use(cors())
app.use(bodyParser.json())


// Painting.hasOne(Artist)
// Artist.hasMany(Painting)

app.get('/paintings', (req, res) => {
    Painting.findAll()
    .then( painting => 
        res.json(painting))
}) 


app.get('/paintings/:id', (req, res) => {
    // eval(pry.it)
    Painting.findByPk(req.params.id)
    .then(painting => 
        res.json(painting))

})

app.post('/paintings', async (req, res) => {
    // eval(pry.it)
     let painting = await Painting.create(req.body)
     res.json(painting)
    // .then(painting => 
    //     res.json(painting))
})

app.patch('/paintings/:id', async (req,res) => {
    let painting = await Painting.findByPk(req.params.id)
    await painting.update(req.body)
    res.json(painting)
})

app.delete('/paintings/:id', async (req,res) => {
    let painting = await Painting.findByPk(req.params.id)
    painting.destroy()
})

const port = 8000
app.listen(port, () => {console.log('I am listing at ' + port)})






