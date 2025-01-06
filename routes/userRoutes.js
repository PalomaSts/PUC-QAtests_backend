import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  resetDatabase,
} from '../controllers/userController.js';

const router = express.Router();

// Rotas
router.post('/', createUser); // Criar um novo usuário
router.get('/', getUsers); // Listar todos os usuários
router.get('/:id', getUserById); // Obter detalhes de um usuário específico
router.put('/:id', updateUser); // Atualizar os dados de um usuário
router.delete('/:id', deleteUser); // Deletar um usuário
router.post('/reset', resetDatabase);

export default router;
