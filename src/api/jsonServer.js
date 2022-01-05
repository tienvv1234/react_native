import axios from 'axios';

export default axios.create({
    baseURL: 'http://f68e-2402-800-6105-21d8-3454-df21-d525-5395.ngrok.io',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
