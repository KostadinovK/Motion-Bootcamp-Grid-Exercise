import React, {useState, useEffect, useContext} from 'react';

import './Grid.css'

import {UserContext} from '../App/App';

import Employee from '../Employee/Employee';

import employeeService from '../../services/employeeService';

function Grid() {
    const { isLoggedIn } = useContext(UserContext);

    let [employees, setEmployees] = useState([]);
    let [departmentId, setDepartment] = useState(null);

    useEffect(() => {
        employeeService.getAll()
        .then(data => setEmployees(data))
        .catch(err => console.log(err));
    }, []);

    const sortEmployees = (criteria) => {

        if(departmentId !== null && criteria !== 'department'){

            employeeService.sortByInDepartment(departmentId, criteria)
            .then(data => setEmployees(data))
            .catch(err => console.log(err));

            return;
        }

        if(criteria === 'department' && departmentId !== null){
            setDepartment(null);
        }

        employeeService.sortBy(criteria)
        .then(data => setEmployees(data))
        .catch(err => console.log(err));
    }

    const filterByDepartment = (departmentId) => {
        setDepartment(departmentId);
        employeeService.filter(departmentId)
        .then(data => setEmployees(data))
        .catch(err => console.log(err));
    }

    const remove = (id) => {
        if(!isLoggedIn) return;

        employeeService.remove(id)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));

        setEmployees(employees.filter(e => e._id !== id));
    };

    return (
        <div>
            {!isLoggedIn ? <h1 className='warning'>You should be Logged In to remove employees</h1> : ''}
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
                {employees.length > 0 ? employees.map(e => (<Employee key={e._id} data={e} filter={filterByDepartment} remove={remove}></Employee>)) : <tr><td>No Employees</td></tr>}
            </tbody>
        </table>
        </div>
        
        
    );
}

export default Grid;