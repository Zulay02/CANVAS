var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, nxf, nyf;
var colorcito = "red";

do
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    xi = 10 * (l + 1);
    nxf = 300 - xf;
    nyf = 300 - yi;

    dibujarLinea(colorcito, 0, xf, nxf, 0);      // esquina superior izquierda
    dibujarLinea(colorcito, xi, 300, 300, nyf);  // esquina inferior derecha
    dibujarLinea(colorcito, yi, 0, 300, xf);     // esquina superior derecha
    dibujarLinea(colorcito, 0, yi, xf, 300);     // esquina inferior izquierda
    l++;
}
while (l < lineas);

dibujarLinea(colorcito, 1, 1, 1, 299);      // borde izquierdo
dibujarLinea(colorcito, 1, 299, 299, 299);  // borde inferior
dibujarLinea(colorcito, 299, 1, 1, 1);      // borde superior
dibujarLinea(colorcito, 299, 299, 299, 1);  // borde derecho

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
