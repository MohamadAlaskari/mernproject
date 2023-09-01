const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json()); // Parse JSON request body

const connection = mysql.createConnection({
    host: 'sql972.main-hosting.eu',
    user: 'u252525807_books',
    password: '96MoAl96+',
    database: 'u252525807_test'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');
});

// Get all books
app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

// Get a specific book by ID
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    connection.query('SELECT * FROM books WHERE id = ?', [bookId], (error, results, fields) => {
        if (error) throw error;
        res.send(results[0]);
    });
});

// Create a new book
app.post('/books', (req, res) => {
    const { title, desc, price, cover } = req.body;
    connection.query('INSERT INTO books (title, author, year) VALUES (?, ?, ?)', [title, desc, price, cover], (error, results, fields) => {
        if (error) throw error;
        res.send('Book added successfully');
    });
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const { title, desc, price, cover } = req.body;
    connection.query('UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?', [title, desc, price, cover, bookId], (error, results, fields) => {
        if (error) throw error;
        res.send('Book updated successfully');
    });
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    connection.query('DELETE FROM books WHERE id = ?', [bookId], (error, results, fields) => {
        if (error) throw error;
        res.send('Book deleted successfully');
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
