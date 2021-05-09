const inputText = document.querySelector('input');
const formulario = document.querySelector('form');
const lista = document.querySelector('ul');
const todos = [];


formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  // if (inputText.value === '') {
  //   return;
  // }

  const nuevoTodo = {
    id: new Date().getTime(),
    descripcion: inputText.value || 'nueva tarea',
    realizado: false
  }

  todos.push( nuevoTodo );
  
  inputText.value = '';
  actualizarLista();
});


const actualizarLista = () => {
  lista.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="contenedor-elemento">
        <p class="lista-elemento ${ todo.realizado ? 'hecho' : '' }" onclick="marcarRealizado( ${todo.id} )">
          ${ todo.descripcion }
        </p>
        <button type="button" class="btn btn-danger"> Borrar </button>
      </div>
    `;

    li.classList.add('m-2');
    lista.appendChild(li);
  });
}


const marcarRealizado = (idTarea) => {
  todos.map(todo => {
    if (idTarea === todo.id) {
      todo.realizado = !todo.realizado;
    }
  });

  console.log(todos);
  actualizarLista();
}