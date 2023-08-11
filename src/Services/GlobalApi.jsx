import axios from "axios";

const movieBaseUrl= import.meta.env.VITE_MOVIE_URLS;
const api_key= import.meta.env.VITE_MOVIE_KEY;

const movieByGenreBaseURL=import.meta.env.VITE_URL;


const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}