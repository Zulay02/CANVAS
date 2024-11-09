var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "red"
do
{
     yi = 10 * l;
     xf = 10 * (l + 1);
     yf = 10 * l
     xi = 10 * (l + 1);
     nxf = 300 - xf;
     nyf = 300 - yf;
     nxi = 300 - xi;
     nyi = 300 - yi;
     
     dibujarLinea(colorcito, 0, xf, nxf, 0);
     dibujarLinea(colorcito, yi, 300, 300, 300)
     dibujarLinea(colorcito, 300, 0, 300,0)
     dibujarLinea(colorcito, 0, xf, nxf, 0);
     dibujarLinea(colorcito, xi, 300, 300, nyf);
     dibujarLinea(colorcito, yi, 0, 300, xf);
     dibujarLinea(colorcito, 0, yi, xf, 300);
     console.log("Lineas" + l);
     l++     
}
while(l < lineas) 
         
dibujarLinea(colorcito, 1, 1, 1, 299);//lineas recta en el borde izquierdo.
dibujarLinea(colorcito, 1, 299, 299, 299);//linea en el borde inferior.
dibujarLinea(colorcito, 299, 1, 1, 1); //Llinea en el borde derecho.
dibujarLinea(colorcito, 299, 299, 299, 1); //linea en el borde superios

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
     lienzo.beginPath();
     lienzo.strokeStyle = color;
     lienzo.moveTo(xinicial, yinicial);
     lienzo.lineTo(xfinal, yfinal);
     lienzo.stroke();
     lienzo.closePath();
}