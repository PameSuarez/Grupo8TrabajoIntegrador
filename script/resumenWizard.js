var nombre = document.getElementById('fname').value;
var apellido = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var pais = document.getElementById('country').value;
var ciudad = document.getElementById('city').value;
var domicilio = document.getElementById('address').value;

var lista1 = document.getElementById("product");
// Obtener el valor de la opción seleccionada
var valorSeleccionado1 = lista1.options[lista1.selectedIndex].value;
// Obtener el texto que muestra la opción seleccionada
var valorSeleccionado1 = lista1.options[lista1.selectedIndex].text;

var lista2 = document.getElementById("activity");
// Obtener el valor de la opción seleccionada
var valorSeleccionado2 = lista2.options[lista2.selectedIndex].value;
// Obtener el texto que muestra la opción seleccionada
var valorSeleccionado2 = lista2.options[lista2.selectedIndex].text;

var negocio = document.getElementById('typeBusiness').value;

const resumen = {
	nombreCompleto: nombre,
	lastName: apellido,
	mail: email,


}


document.getElementById("resu").innerHTML = resumen.lastName;

function hacerResumen() {
    var nombre = document.getElementById('fname').value;

    
}