import axios from 'axios';

export default axios.create({
    baseURL: 'http://0e66-2402-800-6105-c02a-155b-a838-28be-cf1c.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
