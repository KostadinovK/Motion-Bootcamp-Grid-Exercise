const baseUrl = 'http://localhost:5000/api/employee';

function getAll(){
    return fetch(baseUrl).then(resp => resp.json());
}

function sortBy(criteria){

    if(criteria === 'department'){
        criteria = 'department.name';
    }

    const url = `${baseUrl}/sorted/${criteria}`;

    return fetch(url).then(resp => resp.json());
}

function sortByInDepartment(departmentId, criteria){

    if(criteria === 'department'){
        criteria = 'department.name';
    }

    const url = `${baseUrl}/${departmentId}/${criteria}`;

    return fetch(url).then(resp => resp.json());
}

function filter(departmentId){
    const url = `${baseUrl}/${departmentId}`;

    return fetch(url).then(resp => resp.json());
}

function remove(employeeId){
    const url = `${baseUrl}/${employeeId}`;

    return fetch(url, { method: 'DELETE'} ).then(resp => resp.json());
}


export default {getAll, sortBy, sortByInDepartment, filter, remove};