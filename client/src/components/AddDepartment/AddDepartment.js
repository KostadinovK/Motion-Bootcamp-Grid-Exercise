import React from 'react';

import '../../shared/styles/forms.css';

function AddDepartment() {
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