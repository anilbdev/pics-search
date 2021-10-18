import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID omoyuzAQm-x8qEWx0lMNdSuIIEahcLeO5JxKyOs0oP4'
    }
})