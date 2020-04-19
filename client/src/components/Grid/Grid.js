import React from 'react';

import './Grid.css'

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
                <tr>
                    <td className="delete">12278e27e521873e587</td>
                    <td>John</td>
                    <td>Test</td>
                    <td><a href="/">johntest@gmail.com</a></td>
                    <td>React Developer</td>
                    <td className="filter">Development</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Grid;