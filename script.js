/* Calcular el promedio de 5 productos vendidos en una tienda */
// let acuamuladorProductos = 0

// for (var index = 1; index < 5; index++) {
//     let valorProducto = Number(prompt('Ingrese el valor del producto: '))
//     acuamuladorProductos = acuamuladorProductos + valorProducto
// }
// console.log('El promedio de ventas es: ' + acuamuladorProductos / index)


// let numero = Number(prompt('Ingrese un numero: '))
// for (let index = 1; index <= 10; index++) {
//     console.log(numero + ' * ' + index + " = " + (numero * index))
// }  

// let numero = Number(prompt('Ingrese un numero: '))
// let index = 11
// while (index <= 10) {    
//     console.log(numero + ' * ' + index + " = " + (numero * index))
//     console.log('Esto es un mensaje por pantalla')    
//     index++
// }

// let numero = Number(prompt('Ingrese un numero: '))
// let index = 11
// do {
//     console.log(numero + ' * ' + index + " = " + (numero * index))
//     index++
// } while (index <= 10)

// let categoriaTecnologia = 0
// let categoriaHogar = 0
// let categoriaPersonal = 0
// for (let index = 1; index <= 5; index++) {
//     let valorProducto = Number(prompt('Ingrese el valor del producto: '))
//     let categoria = prompt('Ingrese la categoría del producto: \n1 - Tecnología\n2 - Hogar\n3 - Personal')
//     switch (categoria) {
//         case '1':
//             categoriaTecnologia++
//             break;
//         case '2':
//             categoriaHogar++
//             break;
//         case '3':
//             categoriaPersonal++
//             break;
//     }
// }
// console.log('La categoria de tecnología vendió: ' + categoriaTecnologia + ' productos')
// console.log('La categoria de hogar vendió: ' + categoriaHogar + ' productos')
// console.log('La categoria de personal vendió: ' + categoriaPersonal + ' productos')

// let repetir = true
// while(repetir){
//     console.log('Ciclo mientras con centinela')
//     let opcion = prompt('¿Dese repetir la accion?\n1 - Si\n2 - No')
//     if(opcion == '2'){
//         repetir = false
//     }
// }

// let repetir = false
// do{
//     console.log('Ciclo mientras con centinela')
//     let opcion = prompt('¿Dese repetir la accion?\n1 - Si\n2 - No')
//     if(opcion == '2'){
//         repetir = false
//     }
// }while(repetir)

/* Simulación de un cajero electrónico 
Desarrollar un algoritmo que permita simular el comportamiento de un cajero electrónico: consultar, consignar, retirar validado por un inicio de sesión

*/

const usuario = prompt('Ingrese su usuario: ')
if (usuario == 'jaime') {
    let intentos = 3;
    while (intentos > 0) {
        const contrasena = Number(prompt('Ingrese su contraseña: '))
        if (contrasena == 1234) {
            console.log('Bienvenido: ' + usuario)
            let repetir = true
            let saldoCuenta = 0
            let valorTransaccion = 0
            while (repetir) {
                let opcion = prompt('Seleccione\n1 - Consultar\n2 - Consignar\n3 - Retirar\n4 - Salir')
                switch (opcion) {
                    case '1':
                        console.log('Su saldo es: ' + saldoCuenta)
                        break;
                    case '2':
                        valorTransaccion = Number(prompt('Ingrese el valor a consignar'))
                        console.log('Hizo una consignación de: ' + valorTransaccion)
                        saldoCuenta += valorTransaccion
                        console.log('Su nuevo saldo es: ' + valorTransaccion)
                        break;
                    case '3':
                        valorTransaccion = Number(prompt('¿Cuanto desea retirar?'))
                        if (valorTransaccion > saldoCuenta) {
                            console.log('Fondos Insuficientes')
                        } else {
                            console.log('Hizo un retiro: ' + valorTransaccion)
                            saldoCuenta -= valorTransaccion
                        }
                        console.log('Su nuevo saldo es: ' + valorTransaccion)
                        break;
                    case '4':
                        repetir = false
                        console.log('Salió del sistema')
                        break;
                    default:
                        console.log('No existe la opción')
                        break
                }
            }
        } else {
            intentos--;
            console.log('Contraseña incorrecta. Intentos restantes: ' + intentos);
            if (intentos == 0) {
                console.log('Ha superado el número de intentos permitidos. Bloqueando acceso.');
            }
        }
    }
} else {
    console.log('Usuario no existe en la base de datos')
}