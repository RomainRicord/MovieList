import React from 'react'
import {View,FlatList,SafeAreaView} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MovieComponent from '../components/MovieComponent'
import { styles } from '../config/styles'

const FavoriteScreen = () => {

    const favorites = useSelector((state) => state.favoriteReducer.value)

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={({item,index}) => {
                    return(
                        <MovieComponent key={index} name={item.title} picture={item.img} metascore={item.metascore}/>
                    )
                }}
                numColumns={2}
            />
        </SafeAreaView>
    )

}

export default FavoriteScreen