const express = require('express');
const cors = require('cors');

const app = express();

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Routes
const articles = require('./routes/articles');

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());

// ===== ROUTES =====
app.use('/articles', articles);

// ===== SWAGGER =====
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ===== TEST API =====
app.get('/', (req, res) => {
    res.json({ message: "API Blog fonctionne 🚀" });
});

// ===== START SERVER =====
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/docs`);
});
