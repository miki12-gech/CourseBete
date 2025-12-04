
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: [
        'http://localhost:5173', 
        'https://senbet-tmhrt.vercel.app' // <--- REPLACE THIS with your exact Vercel Link!
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json()); 


const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const quizRoutes = require('./routes/quizRoutes');


app.use('/api', authRoutes);


app.use('/api/courses', courseRoutes);


app.use('/api/quiz', quizRoutes);


app.get('/', (req, res) => {
  res.send('CourseBete API is running!');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});