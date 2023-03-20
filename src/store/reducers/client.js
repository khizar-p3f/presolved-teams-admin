import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  config: {
    isLoaded: false,
    id: null,
    clientId: null,
    loginMS: null,
    consentMS: null,
    attributes: null
  }


}

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {

    updateClient: (state, action) => {
      return {
        ...state,
        isLoaded: true,
        ...action.payload
      }
    },
    updateClientConfig: (state, action) => {
      return {
        ...state,
        config: {
          ...state.config,
          isLoaded: true,
          ...action.payload
        }
      }
    },
  },
})
// Action creators are generated for each case reducer function
export const { updateClient, updateClientConfig } = clientSlice.actions

export default clientSlice.reducer