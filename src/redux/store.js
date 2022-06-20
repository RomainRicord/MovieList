import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from './data/favoriteReducer'
import modalReducer from './data/modalReducer'

export default configureStore({
    reducer: {
        favoriteReducer: favoriteReducer,
        modalReducer: modalReducer
    },
})