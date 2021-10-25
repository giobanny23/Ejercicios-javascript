const carrito =[];

const producto ={
    nombre: "Monitor de 32 pulgadas",
    precio:400
}

const pruducto2 ={
    nombre:"Celular",
    precio:800
}

carrito.push(producto);
carrito.push(pruducto2);

const producto3 = {
    nombre:"teclado",
    precio:300
}

carrito.unshift(producto3);

console.table(carrito);