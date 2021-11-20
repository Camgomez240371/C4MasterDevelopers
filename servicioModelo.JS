const express= require("express");
const {createReadStream} = require('fs')
var modelo= require('./usuarios')

const app= new express();
const HTML_CONTENT_TYPE = 'text/html'
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("./public")); // direccion de los archivos a los cuales 

const path = require("path");

require('./conexion_bd') // solicita la conexion a la base de datos en Mongo

app.post("/upload", (req, res) => {
    var myobj = { cedula: req.body.cedula, nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, celular: req.body.celular, user: req.body.user, clave:req.body.clave };
    modelo.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    })
    res.send("1 documento guardado con exito")
    })
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
     
    
    createReadStream('index.html').pipe(res)
    //res.end("hola mundo");
       
})
app.listen(9000, () => {

    console.log("aplicacion corriendo en el puerto 9000")
    
})