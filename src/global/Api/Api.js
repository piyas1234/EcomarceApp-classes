import axios from 'axios'




const Api = axios.create({
    baseURL: 'https://young-eyrie-00428.herokuapp.com/'
})


export default Api;