import React, {useState, useEffect} from 'react';

import './Grid.css'

import Employee from '../Employee/Employee';

import employeeService from '../../services/employeeService';

function Grid() {

    let [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getAll()
        .then(data => setEmployees(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th className="sort">Identification</th>
                    <th className="sort">First Name</th>
                    <th className="sort">Last Name</th>
                    <th className="sort">Email</th>
                    <th className="sort">Position</th>
                    <th className="sort">Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? employees.map(e => (<Employee key={e._id} data={e}></Employee>)) : <tr><td>No Employees</td></tr>}
            </tbody>
        </table>
    );
}

export default Grid;