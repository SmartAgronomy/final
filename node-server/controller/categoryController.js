const Category = require('../models/Category');

// Function to get all categories
const getCategories = async () => {
  try {
    const categories = await Category.find();
    return { success: true, categories };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const addCategory = async (categoryName) => {
  try {
    const category = new Category({ categoryName });
    await category.save();
    return { success: true, category };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


module.exports = {
  getCategories,
  addCategory,
};
