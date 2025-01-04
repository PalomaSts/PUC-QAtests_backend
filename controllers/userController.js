import User from '../models/userModel.js';
import mongoose from 'mongoose';

// Criar um novo usuário
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Listar todos os usuários
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter detalhes de um usuário específico
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Atualizar um usuário
export const updateUser = async (req, res) => {
  const { id } = req.params;
  
  // Verifica se o ID fornecido é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'User not found' }); // Retorna 404 aqui
  }

  try {
    const user = await User.findById(id);

    // Se o usuário não for encontrado, retorna 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Atualiza os campos necessários
    Object.assign(user, req.body);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Deletar um usuário
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
