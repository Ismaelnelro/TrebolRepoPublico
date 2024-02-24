import mongoose, { ConnectOptions } from "mongoose"
import colors from '@colors/colors';
import config from './config'

interface Opt extends ConnectOptions {
  useNewUrlParser: boolean           // Es unuevo analizador de URL de mongoose
  useUnifiedTopology: boolean       //  Permite utilizar la nueva topografia de conexion
}

const connection = () => {
  //permite hacer consultas en campos quew no se definieron en el esquema de modelo, desactivado genera ingreso de datos no validos
  mongoose.set('strictQuery', false);

  const options: Opt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false
  }

  mongoose.connect(config.database as string, options)
    .then(() => console.log(colors.bgYellow.black(" DB connected successfully (n.n)")))
    .catch((error) => console.log(colors.bgYellow.black(" DB connection error (x.x)" + error)))

}

export { connection }