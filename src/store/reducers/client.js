import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  config: {
    isLoaded: false,
    id: undefined,
    clientId: undefined,
    loginMS: 0,
    consentMS: 0,
    attributes: {}
  },
  whiteListedUsers: {
    isLoaded: false,
    items: []
  },


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
    updateWhiteListedUsers: (state, action) => {
      return {
        ...state,
        whiteListedUsers: {
          ...state.whiteListedUsers,
          isLoaded: true,
          items:action.payload
        }       
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
export const { updateClient, updateClientConfig,updateWhiteListedUsers } = clientSlice.actions

export default clientSlice.reducer