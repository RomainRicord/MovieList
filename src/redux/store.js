import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from './data/favoriteReducer'

export default configureStore({
    reducer: {
        favoriteReducer: favoriteReducer
    },
})