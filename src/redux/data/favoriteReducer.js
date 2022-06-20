import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: [],
  },
  reducers: {
    addfavorite: (state,action) => {
        state.value.push(action.payload)
    },
    removefavorite: (state,action) => {
        state.value = state.value.filter(item => item.id !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addfavorite,removefavorite } = favoriteSlice.actions

export default favoriteSlice.reducer