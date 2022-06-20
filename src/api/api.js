import axios from 'axios'
import { API_KEY } from '../config/api'

export const GetPopularMovies = async ({page}) => {

    console.log("GetPopularMovies",page)

    let movies_ = []

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
    await axios.get(url)
    .then(res => {

        const movies = res.data.results

        movies_ = movies
    })
    .catch((error) => {
        // handle error
        console.log("Error GetPopularMovies",error)
    })

    console.log("Movies populaire _",movies_.length)

    return {movies:movies_}
}

export const SearchMovie = async ({query}) => {
    console.log("SearchMovie",query)

    let movies_ = []

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    await axios.get(url)
    .then(res => {

        const movies = res.data.results

        movies_ = movies
    })
    .catch((error) => {
        // handle error
        console.log("Error SearchMovie",error)
    })

    console.log("Movies search _",movies_.length)

    return {movies:movies_}
}