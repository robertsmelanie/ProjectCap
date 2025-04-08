
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');

// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes');

// const app = express();

// const PORT = process.env.PORT || 3001;
// const MONGO_URI = process.env.MONGO_URI;

// console.log('MONGO_URI =', MONGO_URI);


// const cors = require('cors');




// // Middleware
// app.use(express.static('public'));
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors());

// // Routes
// app.use(authRoutes);
// // app.use(productRoutes);


// app.get('/', (req, res) => res.send('Server is live!'));
// app.get('/items', (req, res) => res.send('Items page'));
// app.use('/products', productRoutes)

// // Database Connection
// mongoose.connect(MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected successfully');
//     app.listen(PORT, '0.0.0.0', () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });

// Database Connection
// mongoose.connect(MONGO_URI);

// mongoose.connection.on('connected', () => {
//   console.log('MongoDB connected successfully');
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// DB Connection
// mongoose.connect(MONGO_URI)
//   .then(() => {
//     console.log('✅ MongoDB connected successfully');
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
//   });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const cors = require('cors');
const { OpenAI } = require('openai');

// Route imports
const authRoutes = require('./routes/authRoutes');
const productsRoutes = require('./routes/productsRoutes');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

console.log('MONGO_URI =', MONGO_URI);

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// MongoDB Schema & Model
const productsSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  ItemTitle: { type: String, required: true },
  Image: { type: String },
  Price: { type: String, required: true },
  Description: { type: String, required: true },
  Keywords: { type: Array },
});

const Item = mongoose.model('Products', productSchema);
const 

// Basic Routes
app.get('/', (req, res) => res.send('Server is live!'));
app.get('/products', (req, res) => res.send('Products page'));

// API Routes
app.get('/api/products', async (req, res) => {
  try {
    const items = await Products.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: 'Server error while fetching products' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newItem = new Products(req.body);
    const savedItem = await newProducts.save();
    res.status(201).json(savedProducts);
  } catch (err) {
    console.error("Error adding products:", err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error while adding products' });
  }
});

// OpenAI Chat Route
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  const systemPrompt = {
    role: "system",
    content: "You are Dusty the barn cat. You're clever, sarcastic, a bit grumpy, and live in a barn. You like naps, hate loud noises, and are good at catching mice. Respond with short, sassy replies."
  };

  const messages = [systemPrompt, { role: "user", content: userMessage }];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Mount route modules
app.use('/auth', authRoutes);
app.use('/api/products', productsRoutes);

// Database Connection & Server Start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });