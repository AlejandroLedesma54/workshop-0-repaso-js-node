# workshop-0-repaso-js-node

EJERCICIO 1:


	1.	document.addEventListener('DOMContentLoaded', () => { ... });
	•	Se asegura de que el DOM esté completamente cargado antes de ejecutar el código JavaScript.
	2.	const taskInput = document.getElementById('new-task');
	•	Obtiene el elemento de entrada de texto donde el usuario ingresa nuevas tareas.
	3.	const addTaskBtn = document.getElementById('add-task');
	•	Obtiene el botón que el usuario hace clic para añadir una nueva tarea.
	4.	const taskList = document.getElementById('task-list');
	•	Obtiene el elemento de la lista donde se mostrarán las tareas.
	5.	const loadTasks = () => { ... };
	•	Define una función para cargar las tareas desde localStorage y agregarlas al DOM.
	6.	const saveTasks = (tasks) => { ... };
	•	Define una función para guardar las tareas en localStorage.
	7.	const getTasks = () => { ... };
	•	Define una función para obtener las tareas almacenadas en localStorage.
	8.	const addTaskToDOM = (task) => { ... };
	•	Define una función para añadir una tarea al DOM.
	•	Crea un elemento li para la tarea.
	•	Añade una clase completed si la tarea está completada.
	•	Crea botones para eliminar, editar y marcar como completada la tarea.
	•	Añade los botones al li.
	•	Añade el li a la lista de tareas (taskList).
	9.	const addTask = () => { ... };
	•	Define una función para añadir una nueva tarea.
	•	Obtiene el texto de la tarea del campo de entrada.
	•	Valida que el campo no esté vacío.
	•	Crea un objeto de tarea con el texto y el estado completed en false.
	•	Añade la tarea a la lista de tareas.
	•	Guarda las tareas en localStorage.
	•	Añade la tarea al DOM.
	•	Limpia el campo de entrada.
	10.	const deleteTask = (task, li) => { ... };
	•	Define una función para eliminar una tarea.
	•	Filtra la tarea eliminada de la lista de tareas.
	•	Guarda la lista actualizada en localStorage.
	•	Elimina la tarea del DOM.
	11.	const editTask = (task, li) => { ... };
	•	Define una función para editar una tarea.
	•	Solicita al usuario que ingrese el nuevo texto de la tarea.
	•	Actualiza el texto de la tarea si se proporciona un nuevo texto.
	•	Guarda las tareas actualizadas en localStorage.
	•	Actualiza el texto de la tarea en el DOM.
	12.	const toggleTaskCompletion = (task, li) => { ... };
	•	Define una función para alternar el estado de completado de una tarea.
	•	Cambia el estado completed de la tarea.
	•	Guarda las tareas actualizadas en localStorage.
	•	Alterna la clase completed en el li para reflejar el cambio de estado en el DOM.
	13.	addTaskBtn.addEventListener('click', addTask);
	•	Añade un evento de clic al botón de añadir tarea que llama a la función addTask.
	14.	taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { addTask(); } });
	•	Añade un evento de tecla presionada al campo de entrada que llama a la función addTask cuando se presiona la tecla Enter.
	15.	loadTasks();
	•	Llama a la función loadTasks para cargar y mostrar las tareas almacenadas en localStorage al cargar la página.

EJERCICIO 2:

	1.	Inicialización al Cargar la Página:
	•	document.addEventListener('DOMContentLoaded', () => { ... });: Este evento se dispara cuando se ha cargado todo el contenido HTML y permite ejecutar código JavaScript relacionado con la manipulación del DOM.
	2.	Referencias a Elementos del DOM:
	•	const noteInput = document.getElementById('new-note');: Obtiene la referencia al campo de entrada donde el usuario puede ingresar una nueva nota.
	•	const addNoteBtn = document.getElementById('add-note');: Obtiene la referencia al botón “Add Note” para añadir una nueva nota.
	•	const noteList = document.getElementById('note-list');: Obtiene la referencia a la lista <ul> donde se mostrarán las notas.
	3.	Funciones Principales:
	•	loadNotes(): Carga las notas almacenadas en localStorage al iniciar la aplicación y las muestra en el DOM utilizando addNoteToDOM().
	•	saveNotes(notes): Guarda las notas en localStorage convirtiéndolas a formato JSON.
	•	getNotes(): Obtiene las notas almacenadas en localStorage y las retorna como un array de objetos.
	•	addNoteToDOM(note): Añade una nueva nota al DOM creando elementos HTML dinámicamente y configurando eventos para editar, eliminar y marcar como importante.
	•	addNote(): Maneja la lógica para añadir una nueva nota: valida el contenido del campo de entrada, crea un objeto nota, guarda la nota en localStorage, la añade al DOM y limpia el campo de entrada.
	•	deleteNote(note, li): Elimina una nota del DOM y actualiza localStorage eliminando la nota correspondiente.
	•	editNote(note, li): Permite al usuario editar una nota existente: muestra un prompt con el texto actual de la nota, actualiza el texto de la nota en localStorage y en el DOM.
	•	toggleNoteImportant(note, li, noteText): Permite marcar o desmarcar una nota como importante: actualiza la propiedad important de la nota en localStorage y modifica el DOM para reflejar visualmente la importancia de la nota.
	4.	Event Listeners:
	•	addNoteBtn.addEventListener('click', addNote);: Escucha el evento de clic en el botón “Add Note” para llamar a la función addNote().
	•	document.addEventListener('keypress', (e) => { ... });: Escucha el evento de tecla presionada (Enter) en cualquier parte del documento para añadir una nota al presionar Enter.
	5.	Estilo Visual (CSS):

EJERCICIO 3: 

	•	Manejo de Errores: La función handleError muestra un mensaje de error en caso de que falle la solicitud a la API.
	•	Consumo de la API: fetchPosts utiliza fetch para obtener los posts desde la API JSONPlaceholder. Si la solicitud es exitosa, llama a displayPosts para mostrar los posts en la página.
	•	Visualización de Datos: displayPosts crea elementos <li> para cada post recibido y los añade a la lista <ul>.
	•	Interacción del Usuario: Utiliza funciones de flecha para los manejadores de eventos (addEventListener) y para definir funciones que procesan los datos (fetchPosts, displayPosts).

  EJERCICO 4:

	1.	fetchProducts(): Esta función realiza una solicitud HTTP GET a la API de productos (API_URL). Luego convierte la respuesta en formato JSON y llama a displayProducts(products) para mostrar los productos obtenidos en el contenedor productsContainer.
	2.	displayProducts(products): Esta función recibe un array de productos y los muestra en el DOM. Para cada producto, crea un elemento div con la clase product, que contiene una imagen, título y precio del producto.
	3.	fetchCategories(): Esta función realiza una solicitud HTTP GET a la API de categorías para obtener todas las categorías disponibles. Luego, para cada categoría recibida, crea un elemento option y lo agrega al select categoryFilter, mostrando así las opciones de filtro por categoría en la interfaz.
	4.	filterProducts(): Esta función filtra los productos basándose en el término de búsqueda ingresado en el campo searchInput y la categoría seleccionada en el select categoryFilter. Primero obtiene los productos actuales llamando a fetchProducts(), luego aplica los filtros según los valores de searchInput y categoryFilter, y finalmente muestra los productos filtrados usando displayProducts(filteredProducts).
	5.	Event Listeners: Se añaden dos event listeners:
	•	searchInput.addEventListener('input', filterProducts): Escucha cambios en el campo de búsqueda (input) y llama a filterProducts() para actualizar la lista de productos mostrados.
	•	categoryFilter.addEventListener('change', filterProducts): Escucha cambios en el select de categoría (change) y llama a filterProducts() para actualizar la lista de productos mostrados.
	6.	DOMContentLoaded Event: Todo el código está envuelto dentro de document.addEventListener('DOMContentLoaded', () => { ... });, lo que asegura que el código JavaScript se ejecutará después de que el DOM esté completamente cargado, garantizando que todos los elementos HTML necesarios estén disponibles para manipulación.


  EJERCICIO 5:

	1.	products: Este es un array de objetos que contiene información detallada de cada producto, como su ID, nombre, categoría, precio y stock.
	2.	displayProducts(productsToDisplay): Esta función toma un array de productos (productsToDisplay) y los muestra en el DOM. Crea dinámicamente elementos HTML para cada producto dentro del contenedor especificado (products-container). Para cada producto, muestra su ID, nombre, precio y stock, junto con un botón para verificar la disponibilidad.
	3.	calculateTotalPrice(): Calcula y muestra el precio total de todos los productos sumando los precios de cada producto en el array products. Luego muestra este total en un elemento en la página.
	4.	calculateTotalStock(): Calcula y muestra el stock total de todos los productos sumando los valores de stock de cada producto en el array products. Luego muestra este total en un elemento en la página.
	5.	filterByCategory(): Filtra los productos según la categoría seleccionada por el usuario en un <select> con id category-filter. Si se selecciona una categoría, se muestran solo los productos que pertenecen a esa categoría; de lo contrario, se muestran todos los productos.
	6.	searchProduct(): Filtra los productos según el nombre ingresado por el usuario en un campo de texto con id search-box. Busca productos cuyos nombres contienen la cadena ingresada, ignorando mayúsculas y minúsculas.
	7.	checkAvailability(stock): Muestra una alerta que indica si un producto está disponible o no, basándose en su stock. La disponibilidad se verifica comparando el stock del producto con cero.
	8.	window.onload: Esta función se ejecuta cuando la página ha cargado completamente. Llama a displayProducts(products) para mostrar todos los productos inicialmente al cargar la página.
