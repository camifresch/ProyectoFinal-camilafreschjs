let nombre = prompt ("ingrese su nombre de usuario");

alert ("Hola" + " " + nombre)

let servicio = prompt (`Elija el servicio que quisiera realizar
1: Lifting de pestañas
2: Extensiones de pestañas
3: Laminado de cejas
4: Perfilado de cejas
`);

switch (servicio) {
    case "1":
        alert("el valor es de $2800")
        break;
        case "2":
            alert("el valor es de $3000")
            break;
            case "3":
                alert("el valor es de $2800")
                break;
                case "4":
                    alert("el valor es de $1500")
                    break;
}

let importe = prompt ("ingrese su saldo disponible");

if ((servicio == "1" || "3") & (importe >= 2800)) {
    alert ("Puede continuar con la compra");
}   else if ((servicio == "2") & (importe >= 3000)) {
    alert ("Puede continuar con la compra");
}   else if ((servicio == "4") & (importe >= 1500)) {
    alert ("Puede continuar con la compra");
}   else {
    alert ("Saldo insuficiente");
}


