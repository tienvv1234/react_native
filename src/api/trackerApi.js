import axios from 'axios';

export default axios.create({
    baseURL: 'http://9d4e-27-72-97-105.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
