
/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-Desctructutracion-funcion";



const carritoCompras: Producto[] = [
    {
        desc:'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono',
        precio: 150
    },
];


const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total)
console.log('ISV', isv)