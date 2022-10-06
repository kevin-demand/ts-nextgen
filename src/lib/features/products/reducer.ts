import { createReducer } from '@reduxjs/toolkit'
import { getModelDetails } from '.'
import { getModels, getDisplays } from './actions'

interface ProductState {
    models: any[]
    displays: any[]
    zipCodeFor: {
        models: number
        displays: number
    }
    loading: boolean
}

const initialState: ProductState = {
    models: [],
    displays: [],
    zipCodeFor: {
        models: null,
        displays: null,
    },
    loading: false,
}

export const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getModels.pending, (state) => {
            state.loading = true
        })
        .addCase(getDisplays.pending, (state) => {
            state.loading = true
        })
        .addCase(getModels.fulfilled, (state, action) => {
            state.models = action.payload.data
            state.zipCodeFor.models = action.payload.zipCode
        })
        .addCase(getDisplays.fulfilled, (state, action) => {
            state.displays = action.payload.data
            state.zipCodeFor.displays = action.payload.zipCode
        })
        .addCase(getModelDetails.fulfilled, (state, action) => {
            const index = state.models.findIndex((model) => model.Name === action.payload.Name)
            state.models[index] = action.payload
        })
})
