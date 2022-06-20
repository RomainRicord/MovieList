import React, { useEffect,useState } from 'react'
import {Image, View,Text, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useSelector, useDispatch } from 'react-redux'
import {addfavorite, removefavorite } from '../redux/data/favoriteReducer'

const MovieComponent = ({name,picture,metascore}) => {

    const favorites = useSelector((state) => state.favoriteReducer.value)
    
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Mount Movie")
    },[])

    const checkFavorite = () => {

        let s = false

        favorites.map ((favorite) => {

            //console.log("Search",favorite,name)
            if (favorite.title === name) {
                //console.log("Find")
                s = true
            }
        })

        //console.log("CheckFavorite",s)

        return s
    }

    return(
    <View style={{margin:20,width:150,height:400,display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'black' }}>

        <Image source={{uri:'https://image.tmdb.org/t/p/w500/'+picture}} style={{width:150,height:200,flex:4,backgroundColor:'white'}}/>

        <Pressable style={{position:'absolute', right:10, top:10,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:20,padding:5 }} onPress={() => {
            
            //console.log("Try to remove favorite")
            if (Boolean(checkFavorite())) {
                //console.log("Lets go remove")
                dispatch(removefavorite(name))
            } else {
                //console.log("Lets go add")
                dispatch(addfavorite({name,picture,metascore}))
            }

            console.log("favorite",favorites)
            
            
            }}>
            <Icon name={Boolean(checkFavorite()) ? "star" : "star-outline"} size={30} color="yellow" />
        </Pressable>

        <View style={{ width:150,height:100,flex:0.5, justifyContent:'center',alignItems:'center',backgroundColor:'rgb(50,50,50)' }}>

            <Text style={{textAlign:'center',color:'white'}}>{name}</Text>

        </View>

        <View style={{ width:150,height:100,flex:0.5, justifyContent:'center',alignItems:'center',backgroundColor:'rgb(20,20,20)' }}>

            <Text style={{textAlign:'center',color:'white'}}>{metascore} Metascore</Text>

        </View>
        
    </View>)
}

export default MovieComponent