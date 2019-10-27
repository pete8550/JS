const express = require('express') // Importerer express-modulet
const app = express()
const port = 8080
var cookieParser = require('cookie-parser') // module for parsing cookies
var bodyParser = require("body-parser")

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.sendFile('login.html', { root: __dirname }))
app.get('setcookie', function(req, res) {
    res.cookie('username', 'Peter')
    return res.send('Cookie has been set.')
})

app.get('/getcookie', function(req, res) {
    var username = req.cookies['username']
    if (username) {
        return res.send(username)
    }
    return res.send('No cookie found')
})

app.post('/login', (req, res) => {
    // Her skal jeg tjekke for korrekte credidentials
    if (req.body.userName == "Peter" && req.body.password =="123") {
        console.log('Login-forsøg: Bruger logget korrekt ind!')
        res.send("Du er logget ind.")
    } else {
        console.log('Login-forsøg: Bruger IKKE logget ind!')
        res.send("Fail")
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))