import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

export const getToken = createAsyncThunk('tokens/token', async () => {
    const { data } = await axios.get(window.location.origin + '/api/token')
    Cookies.set('token', data.access_token, {
        expires: new Date(new Date().getTime() + 15 * 60 * 1000),
        secure: true,
        sameSite: 'strict',
    })
    return data.access_token
})

export const getLegacyToken = createAsyncThunk('tokens/legacyToken', async () => {
    const { data } = await axios.post(window.location.origin + '/api/legacy-token')
    Cookies.set('legacyToken', data.access_token, {
        expires: new Date(new Date().getTime() + 15 * 60 * 1000),
        secure: true,
        sameSite: 'strict',
    })
    return data.access_token
})
