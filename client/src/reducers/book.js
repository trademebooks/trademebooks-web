import {createSlice} from '@reduxjs/toolkit'

export const userBookSlice = createSlice({
    name: 'userBooks',
    initialState: {
        entities: [],
        loading: false,
        hasErrors: false
    },
    reducers: {
        gettingUserBooks: state => {
            state.loading = true
        },
        addBookSuccess: (state, {payload}) => {
            state
                .entities
                .push(payload)
            state.loading = false
            state.hasErrors = false
        },
        UserBookSuccess: (state, {payload}) => {
            state.entities = payload
            state.loading = false
            state.hasErrors = false
        },
        UserBookFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})
export const userBooksActions = userBookSlice.actions

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        entities: [],
        loading: false,
        hasErrors: false
    },
    reducers: {
        fetchingBooks: state => {
            state.loading = true
        },
        fetchBooksSuccess: (state, {payload}) => {
            state.entities = payload
            state.loading = false
            state.hasErrors = false
        },
        fetchBooksFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    }
})
export const fetchBooksActions = bookSlice.actions