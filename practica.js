// let numero = Number(prompt("Por favor ingresa el número al que le quieras ver su tabla de multiplicar..."))
// console.log("El numero escogido fue: " + numero + ". En la consola veras su tabla de multiplicar.")

// for(i=1; i<=10;i++){
//     console.log(numero + " x " + i + " = " + (numero * i))
// }

// let numero2 =Number(prompt("Por favor ingresa otro número al que le quieras ver su tabla de multiplicar..."))
// console.log("El segundo numero escogido fue: " + numero2 + ". En la consola veras su tabla de multiplicar.")
// for(i=1; i<=10;i++){
//     console.log(numero2 + " x " + i + " = " + (numero2 * i))
// }

// function sumar(num1, num2){
//     return num1 + num2
// }


// console.log("La suma de los numeros es: " + sumar(7,8))
// for (i = 1; i <= 3; i++) {
//     let opcion = prompt("Bienvenido a la calculo de figuras geométricas: A continuación escoge la figura a la que quieres calcular su radio y perimetro:  1.Circulo  2.Cuadrado. 3.Triangulo")


//     switch (opcion) {
//         case '1':
//             let radio = Number(prompt("Ingrese el radio del circulo para calcular su area y perimetro:"))
//             function calcularAreaCirculo(radio) {
//                 let area = Math.PI * Math.pow(radio, 2)
//                 return area

//             } console.log("El area del circulo es: " + calcularAreaCirculo(radio))

//             function calcularPerimetroCirculo(radio) {
//                 let perimetro = 2 * Math.PI * radio
//                 return perimetro;
//             }
//             console.log("El perimetro del circulo es: " + calcularPerimetroCirculo(radio))

//             function mostrarResultados(radio) {
//                 if (radio <= 0 || isNaN(radio)) {
//                     alert("Error al introducir el radio")
//                     return;
//                 } mostrarResultados(radio);
//                 // console.log("Se acabaron los turnos")
//             } break;
//         case '2':
//             let radioCuadrado = Number(prompt("Ingrese el valor del radio del cuadrado para carlcular su area:"))
//             function calcularAreaCuadrado(radioCuadrado) {
//                 let areaCuadrado = Math.pow(radioCuadrado, 2)
//                 return areaCuadrado
//             } console.log("El area del cuadrado es: " + calcularAreaCuadrado(radioCuadrado))
//             let lado = Number(prompt("Ingrese el valor del lado del cuadrado para calcular el perimetro:"))

//             function calcularPerimetroCuadrado(radioCuadrado) {
//                 let perimetroCuadrado = 4 * radioCuadrado
//                 return perimetroCuadrado
//             } console.log("El perimetro del cuadrado es: " + calcularPerimetroCuadrado(lado))
//             break;

//             case '3':
//                 let opcionTriangulo = Number(prompt("Esta figura tiene dos opciones a calcular: Area y perimetro. Escoge la que quieras calcular primero: 1. Area 2. Perimetro"))
//                 if (opcionTriangulo ==1){
                    
//                     alert("Para calcular el area del triangulo ingresa el valor la base y la altura:")
//                     let area;
//                     function calcularAreaTriangulo(area){
//                     let base = Number(prompt("Ingresa la el valor de la base"))
//                    let altura = Number(prompt("Ingresa la altura"))
//                     area = base * altura
                   
//                        return area
//                       }console.log("El area del triangulo es:" + calcularAreaTriangulo(area)) 
//                 } else {
//                     alert("Para calcular el perimetro del triangulo, ingresa el valor de sus tres lados:")
//                     let perimetro;
//                     function calcularPerimetroTriangulo(perimetro){
//                     let lado1 = Number(prompt("Lado 1"))
//                     let lado2 = Number(prompt("Lado 2"))
//                     let lado3 = Number(prompt("Lado 3"))
//                     return perimetro = lado1 + lado2 + lado3
//                     } console.log("El perimetro del triangulo es: " + calcularPerimetroTriangulo(perimetro))
//                 }
//                    break;

//                    default: alert("Ingresa un valor correcto")
//                    break;

//     }

// }
//  let uno = 5;
//  let dos = '5';
// //  let tre = '2'
//  let resultado = uno + dos ;
//  console.log(resultado)
//  let tipo = typeof (resultado)
//  console.log(tipo)

//  let x = typeof(42);
//  console.log(x)

// let y = 2 *(3+5);
// console.log(y)

// let a = 5;
// let b = '5';

// console.log(a===b)

// let p = parseInt(prompt("Agrega el numero:"))

// let i = 10;
// do{
//     console.log(i);
//     i--;
// }
// while(i>7)
    
// for(let i=0; i<5;i++){
//     //no hace nada
    
// }console.log(i)

// let i = true;

// while(i=false){
//     console.log("hola")

// }
// for(let i = 1; i<=5; i++){
//     console.log(i)
// }
// var temperatura = 14;
// if(temperatura>=30){
//     console.log("HAce calor");
    
// }else if(temperatura >= 15 && temperatura <30){
//     console.log("Está templado");
// } else{
//     console.log("Hace frio")
// }

// var temperatura = 14;
// if(temperatura > 30){
//     console.log("HAce calor");
    
// }else if(temperatura >= 15 ){
//     console.log("Está templado");
// } else{
//     console.log("Hace frio")
// }

// var temperatura = 31;
// if(temperatura>=30){
//     console.log("HAce calor");
    
// }else if(temperatura > 15 ){
//     console.log("Está templado");
// } else{
//     console.log("Hace frio")
// }

// let i = 1;

// while(i<3){
//     console.log(i);
//     i++;
// }
// for(let i=1; i<=10;i++){
    
//     if(i ==5){
//         break;
//     }
//     console.log(i);
// }
// for(let i=1; i<=10;i++){
//     if(i % 2 ===0){
// console.log("Par")
//     } else{
//         console.log("impar")
//     }
// }
// let num = 0;
// while(num < 5){
//     num ++;
//     if(num == 3){
//         console.log("Es tres");
//     }
    
// }

// for(let i=1;i<=10;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// let x=10;
// while(x > 0){
    
//     if(x==5){
//         console.log("Mitad alcanzada")
//     } 
//     x--;
//     console.log(x)
// }

// for(let i=1;i<=5;i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }
// let num = 1;
// while(num <=5){
//     console.log(num);
//     num++;
// }
// let num = 5;
// while(num >0){
//     console.log(num);
//     num--;
// }
// let piso = 1;
// while(piso <=10){
//     if(piso <10){
//         console.log("Piso permitido");

//     }else{
//         console.log("Piso restringido")
//     }
//     piso++;
// }

// function saludar(){
//     var nombre = 'Juan';
//     if(nombre === 'Juan'){
//         console.log("Hola " + nombre)
//     }
// } saludar()

// var total = 0;
// for(var i=0;i<=5;i++){
//     total +=i;
// } console.log(total)

// function imprimirNumeros(){
//     var numeros = [10,20,30,40,50];
//     for(var i=0; i<numeros.length;i++){
//         console.log(numeros[i] + 2)
//     }
// }

// function mostrarMensaje(){
//     var mensaje = "Hola ñeke";
//     console.log(mensaje)
// } mostrarMensaje()

// var calcularArea = function(){
//     var largo = 10;
//     var ancho = 5;
//     var area = largo * ancho
//     mostrarResultado(area)
// }

// var mostrarResultado = function(area){
//     console.log("El area del rectángulo es: " + area);
// }
// calcularArea();


var calcularPromedio = function(){
    var num1 = 5;
    var num2= 10;
    var num3 = 15;
    var promedio = (num1 + num2 + num3)/ 3;
    mostrarPromedio(promedio);
}

var mostrarPromedio = function(promedio){
    console.log("El promedio es: " + promedio)
}
calcularPromedio();