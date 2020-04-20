import React from 'react';

import '../Grid/Grid.css';

function Employee({data, filter}) {
    
    return(
        <tr>
            <td className="delete">{data._id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td><a href="/">{data.email}</a></td>
            <td>{data.position}</td>
            <td className="filter" id={data.department._id} onClick={(e) => filter(e.target.id)}>{data.department.name}</td>
        </tr>
    );
}

export default Employee;