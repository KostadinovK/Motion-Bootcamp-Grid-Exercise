import React from 'react';

import './Grid.css'

import Employee from '../Employee/Employee';

function Grid() {
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
                <Employee data={{id: '1', firstName: 'John', lastName: 'Test', email: 'johntest@gmail.com', position: 'Developer', department: 'Development'}}></Employee>
            </tbody>
        </table>
    );
}

export default Grid;