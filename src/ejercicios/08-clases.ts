
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion: string
        )   {}

}

//ejemplo de herencia 

class Heroe extends PersonaNormal {
    //  public alterEgo: string;
    //  public edad: number;
    //  public nombreReal: number;
    //con esta sintaxis de abajo nos ahorramos lienas de coigo al hacer el constructor asi  
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal:string
        ){
            super(nombreReal, 'New York, USA');
        }
}


const iroman = new Heroe('Iroman',45, 'Tony');

console.log(iroman);