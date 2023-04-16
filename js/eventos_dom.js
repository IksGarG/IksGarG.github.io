// Make a paragraph with id coordenadas display the mouse coordinates
var coordenadas = document.getElementById("coordenadas");
document.onmousemove = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    coordenadas.innerHTML = "Posición del mouse:  (" + x + "," + y + ")";
};

// Given a 2 strings, display both in a single paragraph when pressing a submit button
var boton = document.getElementById("boton");
// console.log(boton);
var texto1 = document.getElementById("texto1");
// console.log(texto1);
var texto2 = document.getElementById("texto2");

var resultado = document.getElementById("resultado");
boton.onclick = function() {
    // Add a space between the two strings
    resultado.innerHTML = texto1.value + " " + texto2.value;
}

// Agrega el código para agregar una fila, o una columna, a la siguiente tabla al dar click al botón correspondiente.

var botonAgregarFila = document.getElementById("agregarFila");
var botonAgregarColumna = document.getElementById("agregarColumna");
var tabla = document.getElementById("tabla");

botonAgregarFila.onclick = function() {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var texto = document.createTextNode("Fila");
    celda.appendChild(texto);
    fila.appendChild(celda);
    tabla.appendChild(fila);
}

botonAgregarColumna.onclick = function() {
    var filas = document.getElementById("tabla").getElementsByTagName("tr");
    for (var i = 0; i < filas.length; i++) {
        var celda = document.createElement("td");
        var texto = document.createTextNode("Columna");
        celda.appendChild(texto);
        filas[i].appendChild(celda);
    }
}

// Incluye dos cajas de input, para solicitar al usuario la posición de la fila y columna de la siguiente tabla, y otra para solicitar un texto. Al apretar el botón, actualiza el contenido de esa tabla en la posición que solicitaste, con la cadena de texto que solicitaste.

var botonActualizar = document.getElementById("btn-change");
var fila2 = document.getElementById("rowIndex");
var columna2 = document.getElementById("colIndex");
var newVal = document.getElementById("newValue");

botonActualizar.onclick = function() {
    var filas = document.getElementById("myTable").getElementsByTagName("tr");
    var celdas = filas[fila2.value].getElementsByTagName("td");
    console.log(fila2); 
    console.log(columna2); 
    console.log(newVal); 
    celdas[columna2.value].innerHTML = newVal.value;
}

// Make a code that given a list in a select, each time you press a add buttton, it adds a randomly color to the list. The color can be blue, red, green, yellow, orange, purple, pink, black, white, gray, brown, or turquoise. And each time you press the button, it adds a new color to the list. And when you press the remove button, it removes the selected color from the list.

var botonAgregar = document.getElementById("btn-add-color");
var botonEliminar = document.getElementById("btn-rmv-color");
var lista = document.getElementById("colorSelect");

var colores = ["Azul", "Rojo", "Verde", "Amarillo", "Narnaja", "Morado", "Rosa", "Negro", "Blanco", "Gris", "Cafe", "Aqua"];

botonAgregar.onclick = function() {
    var color = colores[Math.floor(Math.random() * colores.length)];
    var opcion = document.createElement("option");
    opcion.text = color;
    opcion.value = color;
    lista.add(opcion);
}

botonEliminar.onclick = function() {
    lista.remove(lista.selectedIndex);
}


var imagen = document.getElementById("imagenGato");
imagen.addEventListener("mouseover", function(){
    var width = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    var height = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    imagen.src = "http://placekitten.com/" + width + "/" + height;
});


