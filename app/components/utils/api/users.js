const request = async (path, method, data) => {
    if (!data) {
        return await fetch(`http://localhost:8080/api/v1/users${path}`, {
            method: method,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(data => data.json())
        .catch(console.error);
    }

    return await fetch(`http://localhost:8080/api/v1/users${path}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(console.error);
}

export const getAllUsers = async () => {
    await request('/', 'GET');
}

export const getUser = async (id) => {
    await request(`/get?id=${id}`, 'GET');
}

export const insertUser = async (vocabularySets) => {
    await request('/insert', 'POST', { vocabularySets });
}

export const saveUser = async (id, row, vocabularySetName, vocabularies) => {
    await request('/save', 'PUT', { id, row, vocabularySetName, vocabularies });
}

export const deleteUser = async (id) => {
    await request(`/delete?id=${id}`, 'DELETE');
}   