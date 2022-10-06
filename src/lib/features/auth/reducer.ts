import { createReducer } from '@reduxjs/toolkit'
import { getToken, getLegacyToken } from './actions'
import Cookies from 'js-cookie'

interface TokenState {
    token: string
    legacyToken: string
}

const initialState: TokenState = {
    token: Cookies.get('token'),
    legacyToken: Cookies.get('legacyToken'),
}

export const tokenReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getToken.fulfilled, (state, action) => {
            state.token = action.payload
        })
        .addCase(getLegacyToken.fulfilled, (state, action) => {
            state.legacyToken = action.payload
        })
})
