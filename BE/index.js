const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee');
const connection = require('./db/connect');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/employees', employeeRoutes);

// Check database connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});