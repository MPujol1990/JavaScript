
// //function Producto (titulo, color, precio){
// //this.titulo = titulo;
// //this.color = color;
// //this.precio = precio;
// //}
// //const producto1 = new Producto ("Sillon", "Rojo", 5000);

// //console.log (producto1);


const tipoDeArroz = {
    Nombre: "Yamani",
    Tiempomin: 15,
    Idealpara: "Ensalada",
    Contenidograso: "Bajo",

};
console.log(tipoDeArroz);   

const tipoDeArroz1 = {
    Nombre: "Doble Carolina",
    Tiempomin: 10,
    Idealpara: "Guarnicion",
    Contenidograso: "Alto",

};
console.log(tipoDeArroz1);



let arrayArroz = ["Yamani", "Doble Carolina", "Largo Fino"];

console.log("arrayArroz: ");
console.log(arrayArroz);

for(let i = 0; i< arrayArroz.length; i++ ){
alert (arrayArroz[i]);}
arrayArroz.push("Carnaroli");

const variedades  = [ 
    {nombre: "Yamani", precio: 100, contenidograso: "bajo"},
    {nombre: "Doble Carolina", precio: 50, contenidograso: "medio"},
    {nombre: "Largo Fino", precio: 50, contenidograso: "alto" }
];

let variedadElegida = prompt ("Ingrese tipo de Arroz que desee adquirir");
 console.log( variedades.find((variedades) => variedades.nombre === variedadElegida ));