        
//Variables
        const precioDeHamburguesa = 200
        const descuento = 0.89
        let unidades, personas
        let nombre = (prompt("Bienvenido a hambuerguerseria ELJIGE! Ingrese su nombre.")).toLowerCase();
//Nombre de la persona y cantidad de hambuerguesas
        do {
            unidades = parseFloat(prompt(`Hola ${nombre}!!!! Cuantas hamburguesas quiere llevar?`))
        if (isNaN(unidades)) {
            alert("Por favor ingresa un número válido")
        }
        } while (isNaN(unidades))
     
        do { 
            personas = parseFloat(prompt("Cuantas personas van a comer?"))
        if(isNaN(personas)) {
            alert("Por favor ingresa un número válido")
        }
        } while (isNaN(personas))
//Descuento por cupon
        cupon = parseInt(prompt("Tiene cupon de descuento?"))

        if (cupon == "si") {
            total = (( costoDeHamburguesa - (costoDeHamburguesa * descuento) ) * personas) * unidades
            console.log(total)
        } else {
            total = (costoDeHamburguesa * personas) * unidades
            reserva = parseInt(prompt(`Debe de pagar un tota de $ ${total} pesos. Quiere continuar comprando?`)).toLowerCase()
        } 
        if (compra == "no") {
            prompt("Vulva cuando quiera!")
        }
