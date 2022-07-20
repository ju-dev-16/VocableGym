import config from '../config/config';

const useApi = () => {
    const getAllUsers = async () => {
        return await request('/', 'GET');
    }
    
    const getUser = async ({ id }) => {
        return await request(`/get?id=${id}`, 'GET');
    }
    
    const insertUser = async (vocabularySets) => {
        return await request('/insert', 'POST', { vocabularySets });
    }
    
    const saveUser = async (id, row, vocabularySetName, vocabularies) => {
        return await request('/save', 'PUT', { id, row, vocabularySetName, vocabularies });
    }
    
    const deleteUser = async (id) => {
        return await request(`/delete?id=${id}`, 'DELETE');
    }   

    const request = async (route, method, data) => {
        return await fetch(`${config.BASE_URL}/users${route}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: data ? JSON.stringify(data) : undefined
        })
        .then(res => res.json())
        .catch(console.error); 
    }

    return { getUser, getAllUsers, insertUser, saveUser, deleteUser };
}

export default useApi;