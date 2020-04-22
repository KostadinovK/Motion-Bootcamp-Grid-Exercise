import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../shared/styles/forms.css';

import {UserContext} from '../App/App';

import departmentService from '../../services/departmentService';

function AddDepartment() {

    const history = useHistory();
    let {isLoggedIn} = useContext(UserContext);

    let [form, setForm] = useState({name: ''});
    let [error, setError] = useState(null);

    if(!isLoggedIn){
        history.push('/');
        return null;
    }

    const onInputChange = (e) => {
        let name = e.target.id;
        let value = e.target.value;

        setForm(() => {
            return {...form, [name]: value}
        });
    }

    const validate = (name) => {
        if(name.length < 2){
            return 'Name must be atleast 2 chars!';
        }

        if(name.length > 30){
            return 'Name must be max 30 chars!';
        }   

        return null;
    }

    const addDepartment = async (e) => {
        e.preventDefault();

        let { name } = form;

        let error = validate(name);

        if(error){
            setError(error);
            return;
        }

        let data = await departmentService.add(name)

        if(data.error){
            setError(data.error);
            return;
        }

        setError('Department created successfully');
    }

    return (

        <form className='department-form' onSubmit={(e) => addDepartment(e)}>
            <h2>Add Department</h2>
            {error ? <p className="error">{error}</p> : null}
            <p className="department">
                <input type="text" name="department" id="name" placeholder="Department Name" onChange={(e) => onInputChange(e)} />
            </p>
            <input className='submitButton' type="submit" value="Add" />
        </form>
    );
}

export default AddDepartment;