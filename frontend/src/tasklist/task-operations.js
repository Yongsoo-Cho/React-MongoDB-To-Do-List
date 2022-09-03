import axios from 'axios';
import {API_ENDPOINT} from '../constants';

exports.createTask = async(body) => {
    const response = await axios.post(`${API_ENDPOINT}/task/create`, body);

    return response.data;
};

export const listTasks = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/task/list`, body);
    console.log(response.data);
    return response.data;
};