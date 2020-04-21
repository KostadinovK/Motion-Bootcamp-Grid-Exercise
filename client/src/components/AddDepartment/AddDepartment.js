import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import {UserContext} from '../App/App';

function AddDepartment() {

    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    if(!isLoggedIn){
        history.push('/');
        return null;
    }

    return (

        <form className='department-form'>
            <h2>Add Department</h2>
            <p className="department">
                <input type="text" name="department" placeholder="Department Name" />
            </p>
            <input className='submitButton' type="submit" value="Add" />
        </form>
    );
}

export default AddDepartment;