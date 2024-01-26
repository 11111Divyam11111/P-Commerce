const express = require('express');
const app = express();
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');

// Middleware order
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());

app.listen(7000);

// API for users:
app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.get('/register', (req, res) => {
    res.send("HELLO From Server");
});

// API for products:
app.get('/products', async (req, res) => {
    let data = await Product.find();
    if (data.length > 0) {
        res.send(data);
    } else {
        res.send({ "Result": "No Products found" });
    }
});

app.post('/login', async (req, res) => {
    if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if (user) {
        res.send(user);
    }
    else {
        res.send({result:"No user found!"})
    }}
    else{
        res.send({result:"No user found!"})

    }
})