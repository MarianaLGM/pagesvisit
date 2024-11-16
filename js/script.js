
const numeroVisitas = localStorage.getItem("visitas"); //creo clave en local Storage
let contador;

	if(!numeroVisitas){ //not lógico
		contador = 0; //si contador es cero
		localStorage.setItem("visitas", contador);//accedo clave en local Storage
	} else {
		contador = localStorage.getItem("visitas"); //si contador es visitas
		contador++; //que las sume
		localStorage.setItem("visitas", contador);//acumulado de contador +visita  
	}
  
  document.getElementById("contadorVisitas").innerHTML=contador;//contador visitas html

  console.log (contador)
  

  const clickReset=document.getElementById("btnReestablecer");//boton para hacer click y resetear contador

  clickReset.addEventListener('click', function () {//resetar al hacer click
  localStorage.removeItem("visitas");//eliminar clave cuando toque pinche en RESET
	location.reload();//recarga la URL actual, como el botón Actualizar.
})
