import axios from 'axios'




const Api = axios.create({
    baseURL: 'https://gentle-spire-93271.herokuapp.com/'
})


export default Api;