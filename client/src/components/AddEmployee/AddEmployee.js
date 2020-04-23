import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import { UserContext } from '../App/App';

import departmentService from '../../services/departmentService';

function AddEmployee() {
    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);
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

    function addEmployee(e){
        e.preventDefault();

        console.log(e.target.department.value);
    }

    return (

        <form className='employee-form' onSubmit={(e) => addEmployee(e)}>
            <h2>Add Employee</h2>
            <p>
                <label htmlFor='firstName'>First Name:</label>
                <input type="text" name="firstName" id="firstName"/>
            </p>
            <p>
                <label htmlFor='lastName'>Last Name:</label>
                <input type="text" name="lastName" id="lastName"/>
            </p>
            <p>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email"/>
            </p>
            <p>
                <label htmlFor='position'>Position:</label>
                <input type="text" name="position" id="position"/>
            </p>
            <p>
                <label htmlFor='department'>Department:</label>
                <select type="text" name="department" id="department">
                    <option selected disabled value=''>Select Department</option>
                    {departments ? departments.map(d => (<option key={d._id} value={d._id}>{d.name}</option>)) : null}
                </select>
            </p>
            <input className='submitButton' type="submit" value="Add" />
        </form>
    );
}

export default AddEmployee;