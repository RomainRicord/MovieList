import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: [],
  },
  reducers: {
    setmodal: (state,action) => {
        state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setmodal } = modalSlice.actions

export default modalSlice.reducer