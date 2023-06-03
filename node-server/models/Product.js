// // Product.js
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   productName: {
//     type: String,
//     required: true,
//   },
//   productDescription: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   productImage: {
//    filenae:{
//       type: String
//    },
//     location: {
//       type: String,
//       required: true    
//    }
//   }
// });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  productImage: {
    filename: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
