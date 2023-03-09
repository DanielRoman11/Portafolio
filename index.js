const principal = document.getElementById("principal");
const seccion_2 = document.getElementById("seccionDos");
const curso = document.getElementById("curso");

const estilo = window.getComputedStyle(seccion_2, null);
const estiloCurso = window.getComputedStyle(curso, null);

function mostrarSeccion(){
  if (estilo.display === "none" && screen.width >= 600){
    seccion_2.style.display = 'flex'
    return principal.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))'
  }
  if (estilo.display === "none" && screen.width < 600){
    seccion_2.style.display = 'flex'
    return principal.style.gridTemplateColumns = 'repeat(1, minmax(0, 1fr))'
  }
  else if(estilo.display === 'flex'){
    seccion_2.style.display = 'none'
    return principal.style.gridTemplateColumns = 'repeat(1, minmax(0, 1fr))'
  }
}
function mostrarCursos(){
  if(estiloCurso.display === "none" && screen.width >= 600){
    return curso.style.display == 'flex'
  }
  return curso.style.display == 'none'
}