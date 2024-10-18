const express = require('express');
const router = express.Router();
const connection = require('../db/connect');

// Get all employees
router.get('/', (req, res) => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
});

// Add an employee
router.post('/', (req, res) => {
    const { HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX } = req.body;
    const query = 'INSERT INTO employee (HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send('Employee added successfully');
    });
});

// Update an employee
router.put('/:STT', (req, res) => {
    const { STT } = req.params;
    const { HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX } = req.body;
    const query = 'UPDATE employee SET HoTen = ?, NgaySinh = ?, SoCMT = ?, VanHoa = ?, ChuyenMon = ?, SuPham = ?, HangGPLX = ? WHERE STT = ?';
    connection.query(query, [HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX, STT], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Employee updated successfully');
    });
});

// Delete an employee
router.delete('/:STT', (req, res) => {
    const { STT } = req.params;
    const query = 'DELETE FROM employee WHERE STT = ?';
    connection.query(query, [STT], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Employee deleted successfully');
    });
});

module.exports = router;