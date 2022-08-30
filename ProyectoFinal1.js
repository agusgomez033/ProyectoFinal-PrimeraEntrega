
let realizarCompra = () => {


    let rx570 = 79.999;
    let gtx1050 = 49.850;
    let rtx3060 = 199.990;
    let rtx2060 = 90.144;
    
    let cantRx570 = 0;
    let cantGtx1050 = 0; 
    let cantRtx3060 = 0;
    let cantRtx2060 = 0;

    let compra;

    while(compra != "finalizar"){

        compra = prompt(`Que producto desea llevar? \n "rx570" \n "gtx1050" \n "rtx3060" \n "rtx2060" \n para finalizar compra, escriba "finalizar"`);

    if (compra == "rx570"){
        if(cantRx570 == 0) {
            cantRx570 = parseFloat(prompt(`Cantidad que desea llevar`));
            console.log(`$${rx570 * cantRx570} en rx570`);
        }
        else {
            cantRx570 = parseFloat(prompt(`Producto seleccionado. Que cantidad desea llevar?`));
            console.log(`$${rx570 * cantRx570} en rx570`);
        }
    }
    else if (compra == "gtx1050"){
        if(cantGtx1050 == 0){
            cantGtx1050 = parseFloat(prompt(`Cantidad que desea llevar`));
            console.log(`$${gtx1050 * cantGtx1050} en gtx1050`);
        }
    }
    else if (compra == "rtx3060"){
        if(cantRtx3060 == 0){
            cantRtx3060 = parseFloat(prompt(`Cantidad que desea llevar`));
            console.log(`$${rtx3060 * cantRtx3060} en rtx3060`);
        }
        else{
            cantRtx3060 = parseFloat(prompt(`Producto seleccionado. Qué cantidad deseas llevar?`));
            console.log(`$${rtx3060 * cantRtx3060} en rtx3060`);
        }
    }
    else if (compra == "rtx2060"){
        if(cantRtx2060 == 0){
            cantRtx2060 = parseFloat(prompt(`Cantidad que desea llevar`));
            console.log(`$${rtx2060 * cantRtx2060} en rtx2060`);
        }
        else{
            cantRtx2060 = parseFloat(prompt(`Producto seleccionado. Qué cantidad deseas llevar?`));
            console.log(`$${rtx2060 * cantRtx2060} en rtx2060`);
        }
    }
    else if (compra == "finalizar"){
        alert("Selección Finalizada");
    }
    else{
        alert("La opcion seleccionada no existe");
    }
 }

  let final = rx570 * cantRx570 + gtx1050 * cantGtx1050 + rtx2060 * cantRtx2060 + rtx3060 * cantRtx3060;

  return final

}

//Funcion para calcular producto en CUOTAS

let calcularFinal = (final) => {
    let formaPago

    while(formaPago != "cancelar"){
        let cuotas;
        formaPago = prompt(`Ingrese la forma de pago que desea "Efectivo" o "Debito". Para cancelar su compra seleccionar "cancelar"`);

        if(formaPago == "Efectivo"){
            let cuotas = parseInt(1);
            arreglo = [final.toFixed(2), cuotas]
            return arreglo
        }
        else if(formaPago == "Debito"){
            let cuotas = parseInt(prompt(`De 1 a 3 cuotas sin interes, 6 cuotas con 30% de interes o 12 cuotas de 45% de interes. En cuantas cuotas desea abonar?`));
            if(cuotas == 1){
                arreglo = [final.toFixed(2), cuotas]
                return arreglo
            }
        }
        else if(cuotas == 3){
            final = final / cuotas
            arreglo = [final.toFixed(2), cuotas]
            return arreglo
        }
        else if(cuotas == 6){
            final = (final / cuotas) * 0.30
            arreglo = [final.toFixed(2), cuotas]
            return arreglo
        }
        else if(cuotas == 12){
            final = (final / cuotas) * 0.45
            arreglo = [final.toFixed(2), cuotas]
            return arreglo
        }
        else{
            alert("Cantidad de cuotas invalido, intentelo denuevo")
            continue
        }
    }   
}        

class Usuario {

    constructor(mail, contraseña) {

        this.mail = mail;
        this.contraseña = contraseña;

    }

}

let crearUsuario = () => {

    let capturarMail = prompt("ingrese su e-mail");
    let capturarContraseña = prompt("ingrese su contraseña");
    let nuevoUsuario = new Usuario(capturarMail, capturarContraseña);

    return nuevoUsuario

}

let agregarBase = () => {

    baseDeDatos.push(nuevoUsuario);

    return baseDeDatos

}

function identificarUsuario(usuario) {

    let mail = prompt("ingrese su mail");

    return usuario.mail == mail
}

let baseDeDatos = [
    { mail: ``, contraseña: `` },
    { mail: ``, contraseña: `` }
];

let resultadoFind = baseDeDatos.find(identificarUsuario);
let resultadoIngreso

while (resultadoIngreso != "correcto") {

 
    if (resultadoFind == undefined) {
        console.log("resultado undefined");
        alert("No se encontró al usuario");
        resultadoIngreso = "incorrecto"
        break
    }

    else {

        let contraseña = prompt(`Ingrese su contraseña`);

        if (contraseña == resultadoFind.contraseña) {
            console.log("Logró ingresar al sistema");
            alert(`Bienvenido ${resultadoFind.mail}`);
            break
        }
        else if (contraseña == null) {
            console.log("Dió cancelar al botón");
            alert(`Ingreso cancelado`);
            break
        }
        else {
            alert(`Contraseña incorrecta, inténtelo nuevamente`);
            console.log("Ingresó mal la contraseña");
        }

    }

}

if(resultadoIngreso == "incorrecto") {

    let nuevoUsuario = prompt("Desea crear un usuario? \n \n Ingrese por teclado: 'si' o 'no' ")

    if(nuevoUsuario == "si") {
        nuevoUsuario = crearUsuario();
        baseDeDatos.push(nuevoUsuario);
        console.log(baseDeDatos);
        alert(`Se registró con éxito`)
    }
    else{
        console.log(`Continuará navegando sin registrarse.`)
    }
}

realizarCompra();
