import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'app/store'

interface ProductQueryResponse {
    data: any[]
    zipCode: number
}

export const getModels = createAsyncThunk<ProductQueryResponse, number, { state: RootState }>(
    'products/getModels',
    async (zipCode: number, { getState }) => {
        const { tokens } = getState()

        //Fetch data
        const { data } = await axios.get(
            window.location.origin + '/api/product?zip=' + zipCode + '&token=' + tokens.legacyToken,
        )

        //Attach zip code that data applies to
        const models = {
            data: data,
            zipCode: zipCode,
        }

        //Return the payload
        return models
    },
    {
        //Cancel execution if we already have the data we need in state
        condition: (zipCode, { getState }) => {
            const { products } = getState()
            if (products.models.length > 0 && products.zipCodeFor.models === zipCode) {
                return false
            }
        },
    },
)

export const getDisplays = createAsyncThunk<ProductQueryResponse, number, { state: RootState }>(
    'products/getDisplays',
    async (zipCode: number, { getState }) => {
        const { tokens } = getState()

        //Fetch data
        const { data } = await axios.get(
            window.location.origin +
                '/api/product?displays=true&zip=' +
                zipCode +
                '&token=' +
                tokens.legacyToken,
        )

        //Attach zip code that data applies to
        const displays = {
            data: data,
            zipCode: zipCode,
        }

        //Rreturn the payload
        return displays
    },
    {
        //Cancel execution if we already have the data we need in state
        condition: (zipCode, { getState }) => {
            const { products } = getState()
            if (products.displays.length > 0 && products.zipCodeFor.displays === zipCode) {
                return false
            }
        },
    },
)

export const getModelDetails = createAsyncThunk<
    any,
    number,
    { state: RootState; rejectValue: string }
>('products/getModelDetails', async (model: any, { getState, rejectWithValue }) => {
    const {
        tokens: { legacyToken },
        location: { zipCode },
    } = getState()
    const response = await axios.get(
        window.location.origin +
            '/api/product?zip=' +
            zipCode +
            '&model=' +
            model +
            '&token=' +
            legacyToken,
    )
    if (response.status === 200) {
        return response.data
    } else {
        rejectWithValue('The ' + model + 'is not available in ' + zipCode)
    }
})
