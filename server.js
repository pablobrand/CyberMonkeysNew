const express = require ('express');
const connectDB = require('./server/config/db');

const app = express();

//connect Database
connectDB();

//init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./server/routes/api/users'));
app.use('/api/auth', require('./server/routes/api/auth'));
app.use('/api/profile', require('./server/routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));