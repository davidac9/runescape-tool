require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = require('./controller')

const app = express()
app.use( express.static( `${__dirname}/../build`))

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

app.post('/api/items', ctrl.addItem) // works
app.post('/api/loadouts', ctrl.addLoadout) // works
app.post('/api/loadouts/items', ctrl.addLoadoutItem) // works

app.put('/api/loadouts', ctrl.updateLoadout) // works
app.put('/api/loadouts/items', ctrl.updateLoadoutItem) // works

app.get('/api/items/names', ctrl.getItemNames) // works
app.get('/api/loadouts/names', ctrl.getLoadoutNames) // works
app.get('/api/items', ctrl.getItemImage) // works
app.get('/api/loadouts', ctrl.getLoadoutItems) // this one has a problem

app.delete('/api/items', ctrl.deleteItem) // 
app.delete('/api/loadouts/items', ctrl.deleteLoadoutItem)
app.delete('/api/loadouts', ctrl.deleteLoadout)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`heyoooo I'm about to eat ${SERVER_PORT} ping pong paddles`))
})