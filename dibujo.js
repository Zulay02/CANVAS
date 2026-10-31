var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoporClick()
{
    var lineas = parseInt(texto.value);

    // Se revisa que la cantidad escrita sea valida.
    if (isNaN(lineas) || lineas <= 0)
    {
        alert("Escribe un número de líneas mayor que cero.");
        return;
    }

    // Se borra el dibujo anterior antes de dibujar el nuevo.
    lienzo.clearRect(0, 0, ancho, ancho);

    var l = 0;
    var yi, xf;
    var colorcito = "red";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, ancho);
    }

    // Borde del dibujo.
    dibujarLinea(colorcito, 1, 1, 1, ancho - 1);                  // borde izquierdo
    dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);  // borde inferior
    dibujarLinea(colorcito, ancho - 1, 1, 1, 1);                  // borde superior
    dibujarLinea(colorcito, ancho - 1, ancho - 1, ancho - 1, 1);  // borde derecho
}
