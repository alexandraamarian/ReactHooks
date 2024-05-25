import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isUseStateClicked: false,
    isUseEffectClicked: false,
    isUseCallbackClicked: false,
    isUseRefClicked: false,
  },
  reducers: {
    onSetUseStateActive: (state, {payload} : {payload: boolean}) => {
      state.isUseStateClicked = payload
    },
    onSetUseEffectActive: (state, {payload} : {payload: boolean}) => {
      state.isUseEffectClicked = payload
    },
    onSetUseCallbackActive: (state, {payload} : {payload: boolean}) => {
      state.isUseCallbackClicked = payload
    },
    onSetUseRefActive: (state, {payload} : {payload: boolean}) => {
      state.isUseRefClicked = payload
    },

  },
})

export const { onSetUseStateActive, onSetUseEffectActive, onSetUseCallbackActive, onSetUseRefActive } = sidebarSlice.actions

export default sidebarSlice.reducer