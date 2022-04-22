let habilidades:string [] = ['Bash', 'Counter', 'Healing'];


interface Personaje {
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades:['bash', 'counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje)