import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
    return axios.get(`${BASE_URL}/posts`)
        .then(response => response)
        .catch(error => error)
}

export const getUser = (userId) => {
    return axios.get(`${BASE_URL}/users/${userId}`)
        .then(response => response)
        .catch(error => error)
}

export const getComments = (postId) => {
    return axios.get(`${BASE_URL}/comments?postId=${postId}`)
        .then(response => response)
        .catch(error => error)
}