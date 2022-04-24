
/*
    ===== Código de TypeScript =====
*/

function sumar (a:number,b:number):number{
    return (a + b);
}

const sumarFlecha = (a:number,b:number):number => {
    return a + b;
}

//Funciones con objetos como argumentos 

interface PersonajeLOR{

    nombre:string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR, curarX:number):void{

    personaje.pv += curarX

    console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp(){
        console.log("puntos de vida:", this.pv)
    }
}

curar(nuevoPersonaje,20);