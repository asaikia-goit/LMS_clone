import axios from "axios";

const fetchArticles = async (queryParam = 'react') => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${queryParam}`);
    return response.data.hits;
}


export {
    fetchArticles,
}