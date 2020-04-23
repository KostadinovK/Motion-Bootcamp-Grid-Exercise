import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import { UserContext } from '../App/App';

import departmentService from '../../services/departmentService';
import employeeService from '../../services/employeeService';

function AddEmployee() {
    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    let [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        department: ''
    });

    let [error, setError] = useState(null);
    let [departments, setDepartments] = useState([]);

    useEffect(() => {
        departmentService.getAll()
        .then(data => setDepartments(data))
        .catch(err => console.log(err));
    },[]);

    if(!isLoggedIn){
        history.push('/');
        return null;
    }

    function onInputChange(e){
        let name = e.target.name;
        let value = e.target.value;

        setForm((form) => {
            return {...form, [name]: value};
        })
    }

    function addEmployee(e){
        e.preventDefault();

        const {firstName, lastName, email, position, department} = form;

        employeeService.add(firstName, lastName, email, position, department)
        .then(resp => setError('Employee added successfully'));
    }

    return (

        <form className='employee-form' onSubmit={(e) => addEmployee(e)}>
            <h2>Add Employee</h2>
            {error ? <p className='error'>{error}</p> : null}
            <p>
                <label htmlFor='firstName'>First Name:</label>
                <input type="text" name="firstName" id="firstName" onChange={(e) => onInputChange(e)} value={form.firstName}/>
            </p>
            <p>
                <label htmlFor='lastName'>Last Name:</label>
                <input type="text" name="lastName" id="lastName" onChange={(e) => onInputChange(e)} value={form.lastName}/>
            </p>
            <p>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => onInputChange(e)} value={form.email}/>
            </p>
            <p>
                <label htmlFor='position'>Position:</label>
                <input type="text" name="position" id="position" onChange={(e) => onInputChange(e)} value={form.position}/>
            </p>
            <p>
                <label htmlFor='department'>Department:</label>
                <select type="text" name="department" id="department" onChange={(e) => onInputChange(e)} value={form.department}>
                    <option selected disabled value=''>Select Department</option>
                    {departments ? departments.map(d => (<option key={d._id} value={d._id}>{d.name}</option>)) : null}
                </select>
            </p>
            <input className='submitButton' type="submit" value="Add" />
        </form>
    );
}

export default AddEmployee;