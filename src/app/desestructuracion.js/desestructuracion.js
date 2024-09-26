//desestructuracion de arrays
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes);

const [p1, p2, p3] = personajes;

console.log(p1);

//desestructuracion de objetos
const personaje = {
    nombre: 'Goku',
    poder: 'Kamehameha',
    raza: 'Saiyajin'
}


const {nombre, poder, raza} = personaje;


