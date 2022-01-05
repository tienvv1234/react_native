import axios from 'axios';

export default axios.create({
    baseURL: 'http://0a8c-2402-800-6105-5392-314-881d-b0bb-7208.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
