import React, { useEffect,useState } from 'react'
import { SafeAreaView,Pressable, View,FlatList,ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import {addfavorite} from '../redux/data/favoriteReducer'

import {styles} from '../config/styles'
import MovieComponent from '../components/MovieComponent'

import { GetPopularMovies } from '../api/api.js'

const HomeScreen = () => {

    const favorites = useSelector((state) => state.favoriteReducer.value)

    const [movies, setMovies] = useState([])

    const dispatch = useDispatch()

    const setMoviesList = async () => {

        const movies_ = await GetPopularMovies({page:1})
        .then(res => {
            setMovies(res.movies)
            //console.log("Movies length", res.movies.length)
        })
        //console.log("Resultat",movies_)
        //setMovies(movies_)
    }

    useEffect(() => {
        setMoviesList()
    },[])

    return(
        <SafeAreaView style={styles.container}>

            <FlatList
                data={movies}
                renderItem={({item}) => {
                    return(
                        <MovieComponent name={item.title} picture={item.poster_path} metascore={item.vote_average}/>
                    )
                }
                }
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                />
        </SafeAreaView>
    )

}

export default HomeScreen