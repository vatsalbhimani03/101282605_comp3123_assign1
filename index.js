const express = require('express')
const app = express()

const fs = require('fs')

const userFile = require('./users.json')

app.get('/user', function (req, res) {
    var { uid } = req.query
    let u = userFile.find(u => u.id == Number(uid))
    if (u) {
        res.send(u)
    } 
    else {
        res.send({
            message: "No user found"
        })
    }
})

app.get('/users/all', function (req, res) {
    var ascendingUser = userFile.sort(
        (x, y) => x.username.localeCompare(y.username))
    
    res.send({ userFile: ascendingUser })
})

app.listen(8081, function () {
    console.log("Listening on port 8081")
})