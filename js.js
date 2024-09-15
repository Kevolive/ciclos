const usuario = prompt('Ingrese el usuario: ')
if (usuario=='kevin'){
     
for (var index=0; index <3; index++){


    const contrasena= Number(prompt('Ingrese la contraseña: '))
    if(contrasena==1234){
        console.log('Bienvenido ' + usuario)
    let repetir= true
    let saldoCuenta=0
    let valorTransaccion=0
         
    while(repetir) {
        let opcion = prompt('Hola. Escoge por favor la opcion que deseas: \n1. Consultar\n2. Consignar\n3. Retirar\n4. Transferencia\n5. Salir')
    
    switch (opcion) {
        case '1':
            console.log('Su saldo de cuenta es ' + saldoCuenta)
            
            break;
        case '2':
            valorTransaccion= Number(prompt('Ingrese el valor de la consignacion: '))
            console.log('Realizó una consignacion de: ' + valorTransaccion)
            saldoCuenta+=valorTransaccion
            console.log('Su nuevo saldo es de: ' + saldoCuenta)
            
            break;
        case '3':
            valorTransaccion= Number(prompt('Ingrese el valor del retiro: '))
            if (valorTransaccion > saldoCuenta){
                console.log('Fondos insuficientes')
            } else {
                console.log('Realizó un retiro de: ' + valorTransaccion)
                saldoCuenta-=valorTransaccion
                
            }console.log('Su nuevo saldo es de: ' + saldoCuenta)
            
            break;
            case '4':
                let cuentaTransferencia= Number(prompt('Ingrese la cuenta a la que quiere realizar la transferencia:'))
                valorTransaccion=Number(prompt('Ingrese el valor que quiere transferir a la cuenta No ' + cuentaTransferencia))
                if(valorTransaccion>saldoCuenta){
                    console.log('Fondos insuficientes')
                } else {
                    console.log('Usted transfirio ' + valorTransaccion + ' a la cuenta No ' + cuentaTransferencia)
                saldoCuenta-=valorTransaccion
                }
                
                console.log('Su nuevo saldo es: ' + saldoCuenta)
            break;
        case '5':
            repetir= false
            console.log('Usted salio del sistema')
            break;
    
        default:
            console.log('Opcion incorrecta')
            break;
     }
 }

        } else {
            
            console.log('El sistema queda bloqueado.')
        }
    }

}
else{
    console.log('Usuario incorrecto')
}