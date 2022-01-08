import axios from 'axios';

export default axios.create({
    baseURL: 'http://061a-2402-800-6105-6184-8067-c1ad-1db1-e3b9.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
