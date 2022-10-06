import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PromoProps } from 'src/types'
import { isEmpty } from 'lodash'
import { RootState } from 'app/store'

export const setShowZipCodeDialog = createAction<boolean>('location/setShowZipCodeDialog')

export const getZipCodeMarket = createAsyncThunk<any, number, { state: RootState }>(
    'location/getZipCodeMarket',
    async (zipCode: number) => {
        const { data } = await axios.get(window.location.origin + '/api/market?zip=' + zipCode)
        if (isEmpty(data)) {
            throw new Error('Invalid Zip Code')
        }

        //Attach promo market identifier
        data.PromoMarket = getPromoMarket(data)

        return data
    },
    {
        //Cancel execution if we already have the data we need in state
        condition: (zipCode, { getState }) => {
            const { location } = getState()
            if (location.market.ZipCodes === zipCode) {
                return false
            }
        },
    },
)

export const getNearbyLocations = createAsyncThunk<any, number, { state: RootState }>(
    'location/getNearbyLocations',
    async (limit: number, { getState }) => {
        const {
            tokens: { token },
            location: { zipCode },
        } = getState()

        //Fetch data
        const { data } = await axios.get(
            window.location.origin +
                '/api/nearbyLocations?zip=' +
                zipCode +
                '&limit=' +
                limit +
                '&token=' +
                token,
        )

        //Attach zip code that data applies to
        const locations = {
            locations: data,
            zipCode: zipCode,
        }

        return locations
    },
    {
        //Cancel execution if we already have the data we need in state
        condition: (zipCode, { getState }) => {
            const { location } = getState()
            if (location.zipCodeFor.nearbyLocations === zipCode) {
                return false
            }
        },
    },
)

function getPromoMarket(props: PromoProps) {
    if (props.ApplicableMarket !== null) {
        return 'test_market'
    } else if (props.HWSpecial) {
        return 'miami_market'
    } else if (props.HDHighWindOptionRule !== 'None') {
        return 'high_wind_market'
    } else {
        return 'normal_market'
    }
}
