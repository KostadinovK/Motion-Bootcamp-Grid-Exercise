const baseUrl = 'http://localhost:5000/api/department';

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

export default {add};