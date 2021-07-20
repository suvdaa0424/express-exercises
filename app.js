const http = require('http');
const express = require('express');
const db = require('./model/db');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.set('view engine', 'ejs')
app.set('views', 'views')

const server = http.createServer(app) 

app.get('/', (req, res) => {
    res.render('home', {
        title: "Home Page",
        
    })
})

app.get('/ceo-list', (req, res) => {
    res.render('ceo-list', {
        title: "CEOs",
    })

})
app.get('/ceo-details/:slug', (req, res) => {
    const foundCeo = db.find((ceo) => {
        return ceo.id === parseInt(req.params.slug)
    })
    res.render('ceo-details', {
        title: "CEOs details",
        ceo: foundCeo
    })
})

// app.get('/hello', (req, res) => {
//     res.send('Hello World');
// })

// app.get('/api/friends', (req, res) => {
//     res.json(db.friends);
// })

// app.get('/api/friends/:handle', (req, res) => {
//     console.log(req.params.handle)
//     const foundFriend = db.friends.find((friend) => {
//         if (friend.handle === req.params.handle) {
//             return true
//         }   else {
//             return false
//         }
//     })
//     if (!foundFriend) {
//         res.status(404)
//         res.json()
//     } else {
//         res.json(foundFriend) 
//     }
    

// })

// app.get('/cats', (req, res) => {
//     res.send('Meow!');
// })

// app.get('/dogs', (req, res) => {
//     res.send('Woof!');
// })

// app.get('/cats_and_dogs', (req, res) => {
//     res.send('Dogs and cats living together...mass hysteria!!');
// })
// app.get('/greet/:name', (req, res) => {
//     // const {name} = req.params.name
//     res.send(`<h1>Hello, ${req.params.name}!<h1>`)
// })




app.get('/*', (req, res) => {
    res.status(404);
    res.send('Not Found')
})

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
})