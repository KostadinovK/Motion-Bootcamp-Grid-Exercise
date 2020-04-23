const baseUrl = 'http://localhost:5000/api/department';

function getAll(){
    const url = baseUrl;
    
    return fetch(url, {
        method: 'GET',
        credentials: 'include'
    }).then(resp => resp.json());
}

function add(name){
    const url = baseUrl;
    
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name})
    }).then(resp => resp.json());
}

export default {getAll, add};