const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Define Marker schema
const markerSchema = new mongoose.Schema({
  type: String,
  severity: String,
  resourcesNeeded: Boolean,
  location: String,
  timestamp: Date,
  latitude: Number,
  longitude: Number,
  iconUrl: String
});

const Marker = mongoose.model('Marker', markerSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Server!!!!');
});

// GET all markers
app.get('/api/markers', async (req, res) => {
  try {
    const markers = await Marker.find();
    res.json(markers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new marker
app.post('/api/markers', async (req, res) => {
  const marker = new Marker(req.body);
  try {
    const newMarker = await marker.save();
    res.status(201).json(newMarker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

function startServer(port) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  }).on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying the next port...`);
      startServer(port + 1);
    } else {
      console.error(e);
    }
  });
}

const initialPort = 3000;
startServer(initialPort);