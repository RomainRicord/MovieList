import React,{useState} from 'react'
import {View,FlatList,SafeAreaView} from 'react-native'
import {styles} from '../config/styles'
import { Searchbar } from 'react-native-paper';

import { SearchMovie } from '../api/api.js'

import MovieComponent from '../components/MovieComponent';


const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const setMoviesList = async () => {

        const movies_ = await SearchMovie({query:searchQuery})
        .then(res => {
            setMovies(res.movies)
            console.log("Movies length", res.movies.length)
        })
        //console.log("Resultat",movies_)
        //setMovies(movies_)
    }

    return(
        <View style={styles.container}>
            
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    onBlur={() => setMoviesList()}
                    value={searchQuery}
                />

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
        </View>
    )
}

export default SearchScreen