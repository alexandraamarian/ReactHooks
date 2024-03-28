import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isUseStateClicked: false,
    isUseEffectClicked: false
  },
  reducers: {
    onSetUseStateActive: (state, {payload} : {payload: boolean}) => {
      state.isUseStateClicked = payload
    },
    onSetUseEffectActive: (state, {payload} : {payload: boolean}) => {
      state.isUseEffectClicked = payload
    }
  },
})

export const { onSetUseStateActive, onSetUseEffectActive } = sidebarSlice.actions

export default sidebarSlice.reducer