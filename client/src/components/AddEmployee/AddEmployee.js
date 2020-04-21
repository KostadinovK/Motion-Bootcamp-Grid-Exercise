import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import { UserContext } from '../App/App';

function AddEmployee() {
    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    if(!isLoggedIn){
        history.push('/');
        return null;
    }

    return (

        <form className='employee-form'>
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
                <input type="text" name="department" id="department"/>
            </p>
            <input className='submitButton' type="submit" value="Add" />
        </form>
    );
}

export default AddEmployee;