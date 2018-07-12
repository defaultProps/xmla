import axios from 'axios'
export default axios.create({
    baseURL:'https://www.easy-mock.com/mock/5b356985e58cad501f557b8c/xmla/xmla#!method=get',
    timeout:5000
});
