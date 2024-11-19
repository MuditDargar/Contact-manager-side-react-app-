import axios from 'axios';


export default axios.create({
    baseURL: 'http://localhost:3006/'
    // Add any other custom headers or configurations here if needed.
})