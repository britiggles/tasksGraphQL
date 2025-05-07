const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const taskSchema = require('./schemas/taskSchema'); // Importa el esquema desde su archivo
const taskResolver = require('./resolvers/taskResolver'); // Importa los resolvers desde su archivo

const app = express();

// Configuración de GraphQL con Express
app.use('/graphql', graphqlHTTP({
  schema: taskSchema,        // Usa el esquema de tasks desde taskSchema.js
  rootValue: taskResolver,   // Usa los resolvers de tasks desde taskResolver.js
  graphiql: true,            // Habilita la interfaz gráfica para probar las consultas
}));

// Configurar el servidor para escuchar en el puerto 4000
app.listen(4000, () => {
  console.log('Servidor GraphQL corriendo en http://localhost:4000/graphql');
});

