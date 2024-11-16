


//tudominio.com?variable1=valordevariable1&variable2 =valordevariable2

//<a href="pagina2.php?variable1=hola&variable2=como&va riable3=estas">

//http://127.0.0.1:5501/pagesvisit/?variable1=hola&variable2=como&variable3=estas">

//btnReestablecer (para hacer click y reiniciar contador)
let contador=0;

const contadorVisitas=docuement.getElementById("contadorVisitas");//contador visitas
const clickReestablecer=document.getElementById("btnReestablecer");//boton

clickReestablecer.addEventListener('click', function () {
    //reinicio contador a 0
    contador=0;
    valor.innerHTML=contador;
  });
  console.log (contador)
  

  /*
botonRestablecer.addEventListener('click', function () {
    //incremento contador
    contador ++;
    //muestro valor
    valor.innerHTML=contador
    //reinicio contador a 0
    contador=0;
    valor.innerHTML=contador;
  });*/
  