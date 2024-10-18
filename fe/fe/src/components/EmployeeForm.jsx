import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ selectedEmployee, onSave }) => {
    const [employee, setEmployee] = useState({
        STT: '',
        HoTen: '',
        NgaySinh: '',
        SoCMT: '',
        VanHoa: '',
        ChuyenMon: '',
        SuPham: '',
        HangGPLX: ''
    });

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (employee.STT) {
                await axios.put(`http://localhost:3000/employees/${employee.STT}`, employee);
            } else {
                await axios.post('http://localhost:3000/employees', employee);
            }
            onSave();
            setEmployee({
                STT: '',
                HoTen: '',
                NgaySinh: '',
                SoCMT: '',
                VanHoa: '',
                ChuyenMon: '',
                SuPham: '',
                HangGPLX: ''
            });
        } catch (error) {
            console.error('Error saving employee:', error);
        }
    };

    return (
        <div>
            <h2>{employee.STT ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="HoTen"
                    value={employee.HoTen}
                    onChange={handleChange}
                    placeholder="HoTen"
                    required
                />
                <input
                    type="date"
                    name="NgaySinh"
                    value={employee.NgaySinh}
                    onChange={handleChange}
                    placeholder="NgaySinh"
                    required
                />
                <input
                    type="text"
                    name="SoCMT"
                    value={employee.SoCMT}
                    onChange={handleChange}
                    placeholder="SoCMT"
                    required
                />
                <input
                    type="text"
                    name="VanHoa"
                    value={employee.VanHoa}
                    onChange={handleChange}
                    placeholder="VanHoa"
                    required
                />
                <input
                    type="text"
                    name="ChuyenMon"
                    value={employee.ChuyenMon}
                    onChange={handleChange}
                    placeholder="ChuyenMon"
                    required
                />
                <input
                    type="text"
                    name="SuPham"
                    value={employee.SuPham}
                    onChange={handleChange}
                    placeholder="SuPham"
                    required
                />
                <input
                    type="text"
                    name="HangGPLX"
                    value={employee.HangGPLX}
                    onChange={handleChange}
                    placeholder="HangGPLX"
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EmployeeForm;