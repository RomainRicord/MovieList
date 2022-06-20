import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: [],
  },
  reducers: {
    addfavorite: (state,action) => {
        state.value.push({id:action.id,title:action.payload.name,img:action.payload.picture,metascore:action.payload.metascore,synopsis:action.payload.synopsis})
    },
    removefavorite: (state,action) => {
        state.value = state.value.filter(item => item.title !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addfavorite,removefavorite } = favoriteSlice.actions

export default favoriteSlice.reducer