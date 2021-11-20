//Este codigo contiene las caracteristicas de la "Collecion" inmueble que esta en la base de datos de Mongo

var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{
      descripcion: {
          type: String
      },
      tipo: {
      type: String
      },
      zona: {
          type: String
      },
      capacidad_hab: {
        type: Number
    },
    precio: {
        type: Number
    },
    habilitado: {
        type: Boolean
    }

}

)
module.exports= mongoose.model('Inmueble', userscheme)