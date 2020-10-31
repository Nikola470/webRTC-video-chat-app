const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

// Function for generating universally unique identifier
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect(`/${create_UUID()}`)
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
})


server.listen(3000)