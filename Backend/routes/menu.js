const express = require('express');
const router = express.Router();
const {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require('../controllers/menuController');
const { adminAuth } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Get all menu items (public)
router.get('/', getAllMenuItems);

// Get menu item by ID (public)
router.get('/:id', getMenuItemById);

// Create menu item (admin only)
router.post('/', adminAuth, upload.single('photo'), createMenuItem);

// Update menu item (admin only)
router.put('/:id', adminAuth, upload.single('photo'), updateMenuItem);

// Delete menu item (admin only)
router.delete('/:id', adminAuth, deleteMenuItem);

module.exports = router;
