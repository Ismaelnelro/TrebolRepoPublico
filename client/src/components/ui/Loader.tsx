/*Image*/
import logo from '../../../public/assets/brand/logo.png'

const leyendasTrebol = [
    "\"La fuerza de la naturaleza en cada hoja.\"",
    "\"Creciendo juntos, hoja a hoja.\"",
    "\"Unidos como las hojas de un trébol.\"",
    "\"Cada hoja, un nuevo comienzo.\"",
    "\"El equilibrio entre raíces y hojas.\"",
    "\"Fortaleza en la diversidad de las hojas.\"",
    "\"Un tesoro oculto entre las hojas del trébol.\"",
    "\"La belleza reside en las hojas del trébol.\"",
    "\"Un camino de hojas hacia la buena fortuna.\"",
    "\"Hojas que susurran historias de esperanza.\""
];

const Loader = () => {
    return (
        <div className='fixed flex flex-col justify-center items-center gap-4 bg-green-100 w-full h-screen z-50 '>
            <img className='animate-spin' src={logo} alt="trebol image" width={150} height={150} />
            <p className='font-medium text-green-800 italic text-xs'>{leyendasTrebol[Math.floor(Math.random() * 10)]}</p>
            <p className='font-medium text-green-800'>"Please wait a few moments..."</p>
        </div>
    )
}

export default Loader