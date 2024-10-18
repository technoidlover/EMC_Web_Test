import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';

const EmployeeList = ({ onEdit }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:3000/employees');
            console.log('Fetched employees:', response.data); // Debugging line
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDelete = async (STT) => {
        try {
            await axios.delete(`http://localhost:3000/employees/${STT}`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>HoTen</th>
                        <th>NgaySinh</th>
                        <th>SoCMT</th>
                        <th>VanHoa</th>
                        <th>ChuyenMon</th>
                        <th>SuPham</th>
                        <th>HangGPLX</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.STT}>
                            <td>{employee.STT}</td>
                            <td>{employee.HoTen}</td>
                            <td>{employee.NgaySinh}</td>
                            <td>{employee.SoCMT}</td>
                            <td>{employee.VanHoa}</td>
                            <td>{employee.ChuyenMon}</td>
                            <td>{employee.SuPham}</td>
                            <td>{employee.HangGPLX}</td>
                            <td>
                                <button onClick={() => onEdit(employee)}>Edit</button>
                                <button onClick={() => handleDelete(employee.STT)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;