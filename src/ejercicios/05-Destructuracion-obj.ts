
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo:36,
    cancion: "mess",
    detalles:{
        autor: "Ed Sheeran",
        anio: 2015
    }
}

//destructuracion de objetos para acceder directamente a las propiedades del objeto 
const { volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;



console.log("el volumen actual de: ", volumen);
console.log("el segundo actual de: ", segundo);
console.log("el cancion actual de: ", cancion);
console.log("el autor actual de: ", autor);

//Destructuracion de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
//para destrcuturar debemos tomar en cuenta la posicion de los elementos de cada arreglo

const [p1,p2,p3] = dbz

console.log('Personaje 1: ')
console.log('Personaje 2: ')
console.log('Personaje 3: ')