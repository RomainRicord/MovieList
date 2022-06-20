import React from 'react'
import {Image, View,Text, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MovieComponent = ({name,picture}) => {
    return(
    <View style={{width:200,height:400,display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'black' }}>

        <Image source={{uri:picture}} style={{width:200,height:200,flex:4,backgroundColor:'white'}}/>

        <Pressable style={{position:'absolute', right:10, top:10,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:20,padding:5 }} onPress={() => console.log('press')}>
            <Icon name="star" size={30} color="yellow" />
        </Pressable>

        <View style={{ width:200,height:100,flex:1, justifyContent:'center',alignItems:'center' }}>

            <Text>{name}</Text>

        </View>
        
    </View>)
}

export default MovieComponent