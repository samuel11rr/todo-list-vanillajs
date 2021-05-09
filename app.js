const inputText = document.querySelector('input');
const formulario = document.querySelector('form');
const lista = document.querySelector('ul');


formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputText.value === '') {
    return;
  }

  const nuevoTodo = {
    id: new Date().getTime(),
    descripcion: inputText.value,
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
        <button type="button" class="btn btn-danger" onclick="eliminarTarea( ${todo.id} )">
          Borrar
        </button>
      </div>
    `;

    li.classList.add('m-2');
    lista.appendChild(li);
  });

  guardarDatos();
}


const marcarRealizado = (idTarea) => {
  todos.map(todo => {
    if (idTarea === todo.id) {
      todo.realizado = !todo.realizado;
    }
  });

  actualizarLista();
}


const eliminarTarea = (idTarea) => {
  const index = todos.findIndex(todo => todo.id === idTarea);
  
  todos.splice(index, 1);

  actualizarLista();
}


const guardarDatos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const recuperarDatos = () => {
  return JSON.parse(localStorage.getItem('todos'));
}


const todos = recuperarDatos() || [];

if (todos.length > 0) {
  actualizarLista();
}