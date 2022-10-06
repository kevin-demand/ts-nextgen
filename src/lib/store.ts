import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
//import storage from 'redux-persist/lib/storage'
//import AsyncStorage from '@react-native-community/async-storage';
import { tokenReducer } from 'features/auth'
import { locationReducer } from 'features/location'
import { productReducer } from 'features/products'


const locationPersistConfig = {
    key: 'location',
   // storage: AsyncStorage,
    blacklist: ['showZipCodeDialog', 'loading'],
}

const productsPersistConfig = {
    key: 'products',
    storage: storageSession,
    blacklist: ['loading'],
}

const persistedLocationReducer = persistReducer(locationPersistConfig, locationReducer)
const persistedProductsReducer = persistReducer(productsPersistConfig, productReducer)

export const store = configureStore({
    reducer: {
        location: persistedLocationReducer,
        products: persistedProductsReducer,
        tokens: tokenReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
