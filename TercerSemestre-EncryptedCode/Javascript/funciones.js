miFuncion(8,2); //Esto se le conoce como Hosting

function miFuncion(a,b){
    console.log("Sumamos: " (a + b)); //Sumamos 10, Sumamos: 9
}

//Llamando la funcion
miFuncion(5,4);

miFuncion(8,2); //Esto se le conoce como Hosting

function miFuncion(a,b){
    //console.log("Sumamos: " (a + b)); //Sumamos 10, Sumamos: 9
    //return a+b;
}

//Llamando la funcion
miFuncion(5,4);

Let resultado = miFuncion(6,7);
console.log(resultado); 0

//Declaramos una función de tipo expresión o anonima
Let x = function(a,b) {return a+b} // necesita cierre con punto y coma
resultado = x(5,6) //al llamarla se pone la variable y parentesis
console.log(resultado); 11

//Funciones de tipo self y invoking
(function (a,b)){
    console.log('Ejecutando la función: ' + (a+b)); Ejecutando la función: 15
}(9,6)


console.log(typeof miFuncion); function
function miFuncionDos(a,b){
    console.log(arguments.length);4
}

miFuncionDos(5,7,3,6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a,b) => a+b;
resultado = sumarFuncionFlecha (3,7) //Asignamos el valor de una variable
console.log(resultado); 10


let sumar = function(a=4, b=8){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b + arguments[2];
}
resultado = sumar(3,2,9);
console.log(resultado); 14


//Sumar todos los argumentos
let respuesta = sumarTodo(5,4,13,10,9);
console.log(respuesta); 41
function sumarTodo(){
    Let suma=0;
    for(let i =0; i<arguments.length; i++){
        suma += arguments[i]; //arguments es para arreglo
    }
    return suma
}

//Tipo primitivos
let k=10;
function cambiarValor(a){ //Paso por valor
    a=20;
}
cambiarValor(k);
console.log(k); 10
//Paso por referencia
const persona= {
    nombre: 'Juan'
    apellido: 'Lopez'
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre= 'Ignacio';
    p1.apellido= 'Perez'
}

cambiarValorObjeto(persona);
console.log(persona);
console.log(persona);
