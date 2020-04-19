import React from 'react';

import '../Grid/Grid.css';

function Employee({data}) {
    
    return(
        <tr>
            <td className="delete">{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td><a href="/">{data.email}</a></td>
            <td>{data.position}</td>
            <td className="filter">{data.department}</td>
        </tr>
    );
}

export default Employee;