const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');



router.get('/', async (req, res) => {
    const categoryResult = await categoryController.getCategories();
    if (categoryResult.success) {
      res.status(200).json({ categories: categoryResult.categories });
    } else {
      res.status(500).json({ message: categoryResult.message });
    }
  });

// POST /categories - Add a category
router.post('/', async (req, res) => {
  const { categoryName } = req.body;

  try {
    const result = await categoryController.addCategory(categoryName);
    if (result.success) {
      res.status(201).json({ success: true, category: result.category });
    } else {
      res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;