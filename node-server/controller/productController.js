
const Product = require('../models/Product');
const Category = require('../models/Category');

const getProducts = async () => {
  try {
    const products = await Product.find().populate('category');
    return { success: true, products };
  } catch (error) {
    return { success: false, message: 'Failed to get products' };
  }
};

const addProduct = async (productName, productDescription, amount, productImage, categoryId) => {
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return { success: false, message: 'Category not found' };
    }

    const product = new Product({
      productName,
      productDescription,
      amount,
      productImage,
      category: categoryId,
    });
    await product.save();
    return { success: true, message: 'Product added successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to add product' };
  }
};

const deleteProduct = async (productId) => {
  try {
    await Product.findByIdAndDelete(productId);
    return { success: true, message: 'Product deleted successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to delete product' };
  }
};

const editProduct = async (productId, updatedData) => {
  try {
    await Product.findByIdAndUpdate(productId, updatedData);
    return { success: true, message: 'Product updated successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to update product' };
  }
};

const getCategories = async (categoryId) => {
  try {
    const categories = await Category.find(categoryId);
    return { success: true, categories };
  } catch (error) {
    return { success: false, message: 'Failed to get categories' };
  }
};

const addCategory = async (categoryName) => {
  try {
    const category = new Category({ categoryName });
    await category.save();
    return { success: true, message: 'Category added successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to add category' };
  }
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getCategories,
  addCategory,
};
