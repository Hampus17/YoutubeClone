import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 10, 
        key: 'AIzaSyCHGwr1H8FqgN1qOyuRvowX7A9ZoP7v44I'
    }
})
