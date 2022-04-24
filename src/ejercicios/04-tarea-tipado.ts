
/*
    ===== Código de TypeScript =====
*/

// se hace la interfas para tipar todos los datos del objeto incluyendo las funciones
interface superHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion
    mostrarDireccion : () => string;
}

//Se crea otra interfas en el caso de que exista otra objeto en este caso anidado
interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: superHeroe = {
    nombre: "spiderman",
    edad: 30, 
    direccion: {
        calle: "main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion (){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);