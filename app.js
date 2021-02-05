const express = require('express')
const app = express()

// Para usar a pasta public 
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'EJS')

const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend:true}))
        app.use(bodyParser.json())

//conexao com o Banco para todo o documento
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'loja-full-pet'
})

app.get("/", (req,res) =>{
    res.render('home');
     
    })


app.get("/produtos", (req,res) =>{

    // Comando SQL para manusear o BD
    connection.query("select * from tb_produtos", (error, result) => {
        res.render("pages/produtos", { dados: result })
    })
})

app.get("/produtos", (req,res) =>{
    res.render('pages/produtos'); 
    })


app.get("/cadastro", (req,res) =>{
    res.render('pages/cadastro'); 
    })

app.get("/lojas", (req,res) =>{
    res.render('pages/lojas'); 
    })

app.get("/login", (req,res) =>{
    res.render('pages/login'); 
    })


app.listen(1900, () =>{
    console.log('O Servidor subiu na porta 1900')
})
