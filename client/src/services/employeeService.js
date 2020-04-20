const url = 'http://localhost:5000/api/employee';

function getAll(){
    return fetch(url).then(resp => resp.json());
}

export default {getAll};