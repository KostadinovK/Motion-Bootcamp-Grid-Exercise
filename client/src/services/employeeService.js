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

export default {getAll, sortBy};