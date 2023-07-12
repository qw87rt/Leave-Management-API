const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM userDetails', (error, results) => {
        if (error) {
            console.error('Error retrieving employees: ', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
});

router.post('/', (req, res) => {
    const { name, password, role } = req.body;
  
    if (!name || !password || !role) {
        return res.status(400).json({ error: 'Name, password, and role are required fields' });
    }
  
    const query = 'INSERT INTO employees (name, password, role) VALUES (?, ?, ?)';
    const values = [name, password, role];
  
    db.query(query, values, (error, results) => {
        if (error) {
        console.error('Error inserting employee: ', error);
        res.status(500).json({ error: 'Internal server error' });
        } else {
        res.status(201).json({ message: 'Employee added successfully' });
        }
    });
});

module.exports = router;
