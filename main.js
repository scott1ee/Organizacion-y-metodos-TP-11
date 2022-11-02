// Llamo a la variable del boton
const liquidar = document.getElementById("liquidar");

// Funcion que llama a todos los datos
liquidar.addEventListener('click', () => {
    /*DATOS EMPLEADOR*/
    const nombreEmpleador = document.getElementById("nombreempleador").value;
    const cuit = document.getElementById("cuit").value;
    const domicilio = document.getElementById("domicilio").value;
    /*Muestra las variables guardadas en el HTML una vez que se apreta el submit (Esto para el empleador)*/
    document.getElementById("empleador").innerHTML = "Empleador: " + nombreEmpleador + "</br>" + "CUIT: " + + cuit + "</br>" + "Domicilio Empresarial: " + domicilio;
    /*DATOS EMPLEADO*/
    const nombre = document.getElementById("nombre").value;
    const cuil = document.getElementById("cuil").value;
    const ingreso = document.getElementById("ingreso").value;
    /*Muestra las variables guardadas en el HTML una vez que se apreta el submit (Esto para el empleado)*/
    document.getElementById("empleado").innerHTML = "Empleado: " + nombre + "</br>" + "CUIL: " + cuil + "</br>" + "Fecha de Ingreso: " + ingreso;
    /*LIQUIDACION*/
    const basico = document.getElementById("basico").value;
    const horas = document.getElementById("horas").value;
    /*HORAS EXTRA*/
    const extra = document.getElementById("extra").value;
    const extraSab = document.getElementById("extrasab").value;
    const extraFer = document.getElementById("extrafer").value;
    /*PRESENTISMO*/
    let faltasjus = document.getElementById("faltasjus").value;
    let faltassin = document.getElementById("faltassin").value;
    /*DATOS ADICIONALES*/
    const antiguedad = document.getElementById("antiguedad").value;
    const obrasocial = document.getElementById("obrasocial").value;
    const sindicato = document.getElementById("sindicato").value;
    const vacaciones = document.getElementById("vacaciones").value;
    const aguinaldo = document.getElementById("aguinaldo").value;
    const mejorNeto = document.getElementById("mejorneto").value;

    //Aqui empiezan las cuentas y llamados dinamicos
    // Sueldo
    document.getElementById("basic").innerHTML = "Basico: + " + basico;
    // Faltas Justificadas e Injustificadas
    let faltas = parseInt(faltasjus) + parseInt(faltassin);
    if (faltasjus >= 5 || faltassin >= 5) {
        var faltasdescuen = 0;
    } else {
        var faltasdescuen = 25 - faltas * 5;
    }
    let presentismo = (basico / 100) * 25;
    document.getElementById("porcentaje").innerHTML = "Presentismo" + "(" + faltasdescuen + "%" + ")" + ": + " + presentismo;
    // Antiguedad
    let anti = antiguedad * basico / 100
    document.getElementById("anti").innerHTML = "Antigüedad: + " + anti;
    // Productividad
    const productividad = (basico * 10) / 100;
    document.getElementById("produc").innerHTML = "Productividad: + " + productividad;
    // Horas 50% x1.5
    let hora = basico / 192;
    let he = hora * 1.5;
    let he50 = he * extra;
    document.getElementById("he50").innerHTML = "Horas Extras(50%): + " + parseInt(he50);
    // Horas 100% x2
    let hora100 = basico / 192;
    let he100 = hora100 * 2;
    let he2 = he100 * extraSab;
    document.getElementById("he100").innerHTML = "Horas Extras(100%): + " + parseInt(he2);
    // Feriados
    let horaf = basico / 192;
    let hef = horaf * 2;
    let hefe = hef * extraFer;
    document.getElementById("f").innerHTML = "Feriados: + " + parseInt(hefe);
    // Sueldo Bruto
    let bruto = parseFloat(basico) + parseFloat(presentismo) + parseFloat(anti) + parseFloat(productividad) + parseFloat(he50) + parseFloat(he2) + parseFloat(hefe);
    document.getElementById("bruto").innerHTML = "<hr>" + "Sueldo Bruto: " + parseInt(bruto).toFixed(2);
    // Horitas
    document.getElementById("horastrabajadas").innerHTML = "Horas trabajas: " + horas;
    // SIPA 11%
    let sipa = (bruto * 11) / 100;
    // Obra social 3% y 1.5% por cada afiliado
    let personacargo = 0;
    let obrasoc = (bruto * 11 + personacargo) / 100;
    if (obrasocial >= 1) {
        personacargo += 1;
    }
    // INSSJP 3%
    let inssjp = (bruto * 3) / 100;
    // Sindicato 2.5%
    if (sindicato == "si") {
        var sindi = (bruto * 2.5) / 100;
    }
    else if (sindicato == "no") {
        var sindi = 0;
    }
    // Reducciones
    document.getElementById("reducciones").innerHTML = "SIPA(11%): -" + parseInt(sipa).toFixed(2) + "</br>" + "Obra Social(11%): -" + parseInt(obrasoc).toFixed(2) + "</br>" + "INSSJP(3%): -" + parseInt(inssjp).toFixed(2) + "</br>" + "Sindicato: -" + parseInt(sindi).toFixed(2);
    let reducciones = bruto - sipa - obrasoc - inssjp - sindi;
    // Sueldo Neto
    let neto = reducciones;
    document.getElementById("neto").innerHTML = "Sueldo Neto: + " + parseInt(neto).toFixed(2);
    // Aguinaldo
    // Si cobra aguinaldo o no
    if (aguinaldo == "si") {
        var agui = mejorNeto / 2;
    }
    else if (aguinaldo == "no") {
        var agui = 0;
    }
    document.getElementById("agui").innerHTML = "Aguinaldo: + " + parseFloat(agui).toFixed(2);
    // Vacaciones
    if (antiguedad < 5) {
        var diasvacaciones = 14;
    }
    else if (antiguedad > 5 && antiguedad < 10) {
        var diasvacaciones = 21;
    }
    if (antiguedad > 10 && antiguedad < 20) {
        var diasvacaciones = 28;
    }
    else if (antiguedad > 20) {
        var diasvacaciones = 35;
    }
    // Si cobra vacaciones o no
    if (vacaciones == "si") {
        var vacas = basico / 25 * diasvacaciones;
    }
    else if (vacaciones == "no") {
        var vacas = 0;
    }
    document.getElementById("vacas").innerHTML = "<hr>" + "Vacaciones: + " + parseFloat(vacas).toFixed(2);
    console.log(faltas);
});