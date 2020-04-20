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

    const sortEmployees = (criteria) => {
        employeeService.sortBy(criteria)
        .then(data => setEmployees(data))
        .catch(err => console.log(err));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="sort" onClick={() => sortEmployees('_id')}>Identification</th>
                    <th className="sort" onClick={() => sortEmployees('firstName')}>First Name</th>
                    <th className="sort" onClick={() => sortEmployees('lastName')}>Last Name</th>
                    <th className="sort" onClick={() => sortEmployees('email')}>Email</th>
                    <th className="sort" onClick={() => sortEmployees('position')}>Position</th>
                    <th className="sort" onClick={() => sortEmployees('department')}>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.length > 0 ? employees.map(e => (<Employee key={e._id} data={e}></Employee>)) : <tr><td>No Employees</td></tr>}
            </tbody>
        </table>
    );
}

export default Grid;