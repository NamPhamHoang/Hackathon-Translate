const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send('connect');
    console.log('backend message')
    res.end();
})
app.listen(8080)