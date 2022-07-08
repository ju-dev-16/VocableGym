const request = async (path, method, data) => {
    if (!data) {
        return await fetch(`http://192.168.0.12:8080/api/v1/users${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .catch(console.error);
    }

    return await fetch(`http://192.168.0.12:8080/api/v1/users${path}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(console.error);
}

export const getAllUsers = async () => {
    return await request('/', 'GET');
}

export const getUser = async ({ id }) => {
    return await request(`/get?id=${id}`, 'GET');
}

export const insertUser = async (vocabularySets) => {
    return await request('/insert', 'POST', { vocabularySets });
}

export const saveUser = async (id, row, vocabularySetName, vocabularies) => {
    return await request('/save', 'PUT', { id, row, vocabularySetName, vocabularies });
}

export const deleteUser = async (id) => {
    return await request(`/delete?id=${id}`, 'DELETE');
}   