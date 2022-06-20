import React from 'react'
import { Pressable } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import {addfavorite} from '../redux/data/favoriteReducer'

const HomeScreen = () => {

    const favorites = useSelector((state) => state.favorites.value)

    const dispatch = useDispatch()

    return(
        <View>
            <Pressable onPress={() => dispatch(addfavorite('test'))} />
        </View>
    )

}

export default HomeScreen