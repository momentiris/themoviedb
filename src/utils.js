import { types } from './components/contextProvider'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${
  process.env.REACT_APP_API_KEY
}&language=en-US&page=1&include_adult=false`
export const API_IMAGES_URL = `https://image.tmdb.org/t/p/w`
const { SEARCH_RESULT_MOVIES } = types

export const apiSearchQueryBuilder = (q, type) =>
  type === SEARCH_RESULT_MOVIES
    ? `${API_SEARCH_URL}&query=${encodeURIComponent(q)}`
    : type === types.SEARCH_RESULT_MOVIE
    ? `${API_BASE_URL}/movie/${q}?api_key=${process.env.REACT_APP_API_KEY}`
    : `${API_BASE_URL}/movie/${q}/credits?api_key=${
        process.env.REACT_APP_API_KEY
      }`

export const getDataAsync = async (query, type) => {
  const req = await fetch(apiSearchQueryBuilder(query, type))
  const res = await req.json()
  return res
}

export const withImageUrls = (data, size) => {
  return {
    ...data,
    backdrop_path: data.backdrop_path
      ? `${API_IMAGES_URL}${size}${data.backdrop_path}`
      : false,
  }
}
