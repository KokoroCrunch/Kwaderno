const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { adminAuth } = require('../middleware/auth');

// Get all users (admin only)
router.get('/', adminAuth, getAllUsers);

// Get user by ID (admin only)
router.get('/:id', adminAuth, getUserById);

// Update user (admin only)
router.put('/:id', adminAuth, updateUser);

// Delete user (admin only)
router.delete('/:id', adminAuth, deleteUser);

module.exports = router;
