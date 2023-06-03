const jwt = require('jsonwebtoken');
const secretKey = 'secretkeymithun';
const User = require('../models/User');

// Signup controller
const signup = async (req, res) => {
  const { fname, lname, mobile, email, password, address, state, city } = req.body;

  try {
    // Check if user already exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new user and save to database
    const newUser = new User({ fname, lname, mobile, email, password, cpassword: password, address, state, city });
    const savedUser = await newUser.save();
    
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists with the given email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token and send back to client
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    let isAdmin = false;
    let role = user.role;

    // Check if the user is an admin
    if (role === 1) {
      isAdmin = true;
      console.log('logged as admin');
    }

    res.json({ token, userID: user._id, role, isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



 const profile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { fname, lname, mobile, email, address, state, city, role } = user;
    const userProfile = {
      fname,
      lname,
      mobile,
      email,
      address,
      state,
      city,
      role: role == '1' ? 'Admin' : 'User',
      isAdmin: role == '1' ? true : false,
    };

    res.json(userProfile);

    // Export isAdmin
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }};



  const addToCart = async (req, res) => {
    console.log(req.body, "62");
  
    const userId = req.user.userId;
    const productId = req.body.productId;
  
    const user = await User.findOne({ _id: userId });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
  
    const isProductExist = user.cart.some((product) => product.toString() === productId);
  
    if (isProductExist) {
      return res.status(200).json({ message:(" Product already exists in the cart") });
    }else{
  
    user.cart.addToSet(productId);
    await user.save();
  
    return res.status(200).json({ message: 'Add to cart success.' });
  }};
  

const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.userId;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const index = user.cart.findIndex((product) => product.toString() === productId);

    if (index === -1) {
      return res.status(404).json({ message: 'Product not found in cart.' });
    }

    user.cart.splice(index, 1);
    await user.save();

    return res.status(200).json({ message: 'Product removed from cart successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Err' });
  }
};


const getCart = async (req, res) => {
  const userId = req.user.userId;

  const data = await User.findOne({ _id: userId }).populate('cart').populate({
    path: 'cart',
    populate: {
      path: 'category',
      model: 'Category',
    },
  });

  if (data) {
    return res.status(200).json({ message: 'Get cart success.', data });
  } else {
    return res.status(500).json({ message: 'Server Err' });
  }
};

module.exports = { signup, login, profile, addToCart, getCart, removeFromCart };
