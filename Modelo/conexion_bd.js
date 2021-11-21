// Este codigo conecta la base de datos creada en Mongo BD
const mongourl = "mongodb+srv://JuanCamilo:Bruno0520@proyectociclo4.9livf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var mongoose = require('mongoose');

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("mongodb is connected");
}).catch((error) => {
    console.log("mondb not connected");
    console.log(error);
});