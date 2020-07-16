import {createSlice} from '@reduxjs/toolkit'
export const settingSlice = createSlice({
    name: 'settings',
    initialState: {
        entities: {
            user_id: '',
            recieveEmail_1: false,
            recieveTexts_1: false
        },
        loading: false,
        hasErrors: false
    },
    reducers: {
        fetchingSettings: state => {
            state.loading = true
        },
        fetchSettingsSuccess: (state, {payload}) => {
            state.entities = payload[0];
            state.loading = false
            state.hasErrors = false
        },
        fetchSettingsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        updateSettingsSuccess: (state, {payload}) => {
            state.entities = {
                ...payload,
                user_id: state.entities.user_id
            }
            state.loading = false
            state.hasErrors = false
        }
    }
})
export const settingActions = settingSlice.actions;