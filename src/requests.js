require('dotenv').config()
const api_key = "5a2d55143f5b5dbf5c59611567f24a52";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&language=en-us`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-us`,
    fetchActionMovis: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovis: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovis: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanticMovis: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,

}

export default requests;