const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('*', (req, res) => {
    res.send(`
    <h1>No existe esa página</h1>
    <h3><a href="/">Volver al Home</a></h3>
    `)
});

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port} http://localhost:${port}`);
})
