const cursoBtn = document.getElementById("btnCursos");
const cursos = document.getElementById("cursos");

const estiloCurso = window.getComputedStyle(cursos, null);

function mostrarCursos(){
  if(estiloCurso.display === "none"){
    cursoBtn.innerHTML = 
    `
    <p class="text-white texto text-xl">Cerrar<p class="text-white"><ion-icon name="close-circle-outline"></ion-icon></p>
    `
    return cursos.style.display = 'flex'
  }
  cursoBtn.innerHTML = 
  `
  <p class="text-white texto text-xl">Ver Cursos<p class="text-white"><ion-icon name="arrow-down-outline"></ion-icon></p>
  `
  return cursos.style.display = 'none'
}