import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log('MONGO_URI:', process.env.MONGO_URI);

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use('/api/users', userRoutes);

// Inicia o servidor somente se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;  // Exporte o app para uso nos testes
