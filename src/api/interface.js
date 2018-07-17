import axios from 'axios'
export default axios.create({
    baseURL:'https://www.easy-mock.com/mock',
    timeout:5000
});
