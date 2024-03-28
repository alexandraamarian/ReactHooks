import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isUseStateClicked: false,
  },
  reducers: {
    onSetUseStateActive: (state, {payload} : {payload: boolean}) => {
      state.isUseStateClicked = payload
    },
  },
})

export const { onSetUseStateActive } = sidebarSlice.actions

export default sidebarSlice.reducer