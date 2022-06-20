import React from 'react'
import { BottomNavigation} from 'react-native-paper';
import { useState } from 'react';
import FavoriteScreen from '../screens/FavoriteScreen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'

const BottomNavigator = ()  => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'movies', title: 'Films', focusedIcon: 'movie', unfocusedIcon: 'movie-outline'},
        { key: 'favorite', title: 'Favoris', focusedIcon: 'star', unfocusedIcon: 'star-outline'},
        { key: 'search', title: 'Rechercher', focusedIcon: 'movie-search', unfocusedIcon: 'movie-search-outline'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        movies: HomeScreen,
        favorite: FavoriteScreen,
        search: SearchScreen
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )

}

export default BottomNavigator