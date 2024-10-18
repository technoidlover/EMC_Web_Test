import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList.jsx';
import EmployeeForm from './components/EmployeeForm.jsx';

const App = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleSave = () => {
        setSelectedEmployee(null);
    };

    return (
        <div className="App">
            <h1>Employee Management</h1>
            <EmployeeForm selectedEmployee={selectedEmployee} onSave={handleSave} />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
};

export default App;