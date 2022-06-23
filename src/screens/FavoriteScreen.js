import React,{useState} from 'react'
import {View,FlatList,SafeAreaView} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MovieComponent from '../components/MovieComponent'
import MovieModalComponent from '../components/MovieModalComponent'
import { styles } from '../config/styles'

const FavoriteScreen = () => {

    const favorites = useSelector((state) => state.favoriteReducer.value)

    const [modalVisible,setModalVisible] = useState(false)

    return(
        <SafeAreaView style={styles.container}>
            <MovieModalComponent setModalVisible={setModalVisible}  visible={modalVisible}/>
            <FlatList
                data={favorites}
                renderItem={({item,index}) => {
                    return(
                        <MovieComponent setModalVisible={setModalVisible} synopsis={item.synopsis} key={index} name={item.title} picture={item.img} vote_average={item.vote_average}/>
                    )
                }}
                numColumns={2}
            />
        </SafeAreaView>
    )

}

export default FavoriteScreen