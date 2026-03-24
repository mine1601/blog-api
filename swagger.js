const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'API simple de gestion d’articles'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },

  // ✅ IMPORTANT : chemin absolu fiable
  apis: [path.join(__dirname, 'routes/*.js')],
};

module.exports = swaggerJSDoc(options);
