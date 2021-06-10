// Normalize
import 'normalize.css';

// Css principal
import './styles/css/main.css';

let nombre;

class Hola {

    public nombre: string;
    public apellido: string;
    public edad: number
    constructor(nombre: string, toto: string, edad: number) {
        this.nombre = nombre;
        this.apellido = toto;
        this.edad = edad;
    }
}




const saludo: Hola = new Hola('David', 'Salinas', 38);

console.log(saludo.nombre);

document.write(saludo.apellido);



