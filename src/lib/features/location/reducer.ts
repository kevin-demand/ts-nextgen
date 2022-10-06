import { createReducer } from '@reduxjs/toolkit'
import { setShowZipCodeDialog, getZipCodeMarket, getNearbyLocations } from './actions'

interface LocationState {
    zipCode: number
    errorMessage: string
    showZipCodeDialog: boolean
    market: any
    nearbyLocations: any[]
    zipCodeFor: {
        nearbyLocations: number
    }
    loading: boolean
}

const initialState: LocationState = {
    zipCode: null,
    errorMessage: null,
    showZipCodeDialog: false,
    market: {},
    nearbyLocations: [],
    zipCodeFor: {
        nearbyLocations: null,
    },
    loading: false,
}

export const locationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setShowZipCodeDialog, (state, action) => {
            state.showZipCodeDialog = action.payload
        })
        .addCase(getZipCodeMarket.pending, (state) => {
            state.nearbyLocations = []
            state.loading = true
        })
        .addCase(getZipCodeMarket.fulfilled, (state, action) => {
            return {
                ...state,
                zipCode: action.payload.ZipCodes,
                showZipCodeDialog: false,
                errorMessage: null,
                market: action.payload,
                loading: false,
            }
        })
        .addCase(getZipCodeMarket.rejected, (state) => {
            state.errorMessage = 'Invalid Zip'
        })
        .addCase(getNearbyLocations.pending, (state) => {
            state.loading = true
        })
        .addCase(getNearbyLocations.fulfilled, (state, action) => {
            return {
                ...state,
                nearbyLocations: action.payload.locations,
                zipCodeFor: {
                    nearbyLocations: action.payload.zipCode,
                },
                loading: false,
            }
        })
        .addCase(getNearbyLocations.rejected, (state, action) => {
            state.errorMessage = action.error.message
        })
})
