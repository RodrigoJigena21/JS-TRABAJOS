
function conversorDeDivisas() {


const elegirMoneda =prompt('ingrese moneda a convertir a pesos arg (1) DOLAR - (2) EURO')
const monto =parseInt(prompt('Ingrese monto a calcualar'))


let dolar = 286
let euro = 149


switch(elegirMoneda){
    case '1':
       let resultado =  monto * dolar
        alert('valor de conversion es de ' + resultado + ' de pesos arg ' )
        break;

        case '2':
           let resultado2 = monto * euro
            alert('valor de conversion es de ' + resultado2 + ' de pesos arg ' )
            break
}
}

conversorDeDivisas()
conversorDeDivisas()