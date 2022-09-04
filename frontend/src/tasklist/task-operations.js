import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const createTask = async(body) => {
    if(body.content==="") return;

    const response = await axios.post(`${API_ENDPOINT}/task/create`, body);

    return response.data;
};

export const listTasks = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/task/list`, body);

    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_ENDPOINT}/task/${id}`);

    return response.data;
};

export const resolveTask = async (id) => {
    const response = await axios.put(`${API_ENDPOINT}/task/${id}`);
    return response.data;
}