import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        entities: [],
        loading: false,
        hasErrors: false
    },
    reducers: {
        fetchingMessages: state => {
            state.loading = true
        },
        fetchMessageSuccess: (state, {payload}) => {
            state.entities = payload
            state.loading = false
            state.hasErrors = false
        },
        fetchMessageFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})
export const messageActions = messageSlice.actions;
console.log(messageActions)