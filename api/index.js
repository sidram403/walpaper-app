import axios from 'axios'

const API_KEY = '32179226-6557cd26413aee48a4a5a3bef'

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) =>{
    let url = apiUrl+'&per_page=25&safesearch=true&editor_choice=true'
    if(!params) return url;

    let paramKeys = Object.keys(params);
    paramKeys.map(key =>{
        let value = key=='q' ? encodeURIComponent(params[key]): params[key];
        url += `&${key}=${value}`;
    })
    return url
}

export const apiCall = async (params) =>{
    try {
        const response = await axios.get(formatUrl(params))
        const {data} = response

        return {succss: true, data}
    } catch (error) {
        console.log(error.message);
        return {succss: false, msg:error.message}
    }
}