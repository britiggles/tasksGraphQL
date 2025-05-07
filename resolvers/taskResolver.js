// /graphql/resolvers/taskResolver.js
const tasks = [];  // Usamos un array para simular la base de datos por ahora

const taskResolver = {
  getAllTasks: () => {
    return tasks;  // Devuelve todas las tareas
  },
  getTask: ({ id }) => {
    return tasks.find(task => task.id === id);  // Devuelve la tarea por ID
  },
  createTask: ({ title, description }) => {
    if (!title || !description) throw new Error('El título y la descripción son obligatorios');
    const newTask = {
      id: String(tasks.length + 1),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;  // Devuelve la nueva tarea creada
  },  
  updateTask: ({ id, title, description, completed }) => {
    const task = tasks.find(task => task.id === id);
    if (!task) throw new Error('Tarea no encontrada');
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;
    return task;  // Devuelve la tarea actualizada
  },
  deleteTask: ({ id }) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error('Tarea no encontrada');
    tasks.splice(index, 1);
    return 'Tarea eliminada con éxito';  // Mensaje de éxito al eliminar
  },
  
};

module.exports = taskResolver;
