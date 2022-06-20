import React,{useEffect, useState} from 'react'
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import {Image,View} from 'react-native'

const MovieModalComponent = ({ moviemodal, visible,setModalVisible }) => {

    const handleClose = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        console.log("Mount MovieModalComponent",visible)
    }, [])

    return (
        <Portal style={{display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Modal visible={visible} onDismiss={handleClose} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.9)',margin:40,marginTop:50,marginBottom:50,borderRadius:20,textAlign:'center'}}>
                <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>{moviemodal.name}</Text>
                <Image source={{uri:'https://image.tmdb.org/t/p/w500/'+moviemodal.picture}} style={{width:150,height:200,backgroundColor:'white'}}/>
                <Text style={{textAlign:'center',padding:20}}>{moviemodal.synopsis}</Text>
                <Button onPress={handleClose}>Close</Button>
                </View>
                
            </Modal>
        </Portal>
    )

}

export default MovieModalComponent