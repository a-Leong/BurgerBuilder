import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e5b1c.firebaseio.com/'
});

export default instance;