import React from 'react'
import { Pressable, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import {addfavorite} from '../redux/data/favoriteReducer'

import {styles} from '../config/styles'
import MovieComponent from '../components/MovieComponent'

const HomeScreen = () => {

    const favorites = useSelector((state) => state.favoriteReducer.value)

    const dispatch = useDispatch()

    return(
        <View style={styles.container}>
            <MovieComponent name="The Shawshank Redemption" picture="https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_QL75_UX380_CR0,3,380,562_.jpg" />
            <Pressable onPress={() => dispatch(addfavorite('test'))} />
        </View>
    )

}

export default HomeScreen