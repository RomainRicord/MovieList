import React,{useState} from 'react'
import {View,FlatList,SafeAreaView} from 'react-native'
import {styles} from '../config/styles'
import { Searchbar } from 'react-native-paper';

import { SearchMovie } from '../api/api.js'

import MovieComponent from '../components/MovieComponent';
import MovieModalComponent from '../components/MovieModalComponent'

import { useSelector, useDispatch } from 'react-redux'

const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [modalVisible,setModalVisible] = useState(false)

    const setMoviesList = async () => {

        const movies_ = await SearchMovie({query:searchQuery})
        .then(res => {
            setMovies(res.movies)
            //console.log("Movies length", res.movies.length)
        })
        //console.log("Resultat",movies_)
        //setMovies(movies_)
    }

    return(
        <View style={styles.container}>

            <MovieModalComponent setModalVisible={setModalVisible}  visible={modalVisible}/>
            
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
                            <MovieComponent setModalVisible={setModalVisible} synopsis={item.overview} name={item.title} picture={item.poster_path} vote_average={item.vote_average}/>
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