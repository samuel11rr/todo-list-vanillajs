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

  inputText.value = '';

  actualizarLista(nuevoTodo);
});


const actualizarLista = ( nuevoTodo ) => {
  todos.push( nuevoTodo );
  console.log(todos);
  
  lista.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="contenedor-elemento">
        <p class="lista-elemento"> ${ todo.descripcion } </p>
        <button type="button" class="btn btn-danger"> Borrar </button>
      </div>
    `;

    li.classList.add('m-2');
    lista.appendChild(li);
  });
}