import {userBooksActions, fetchBooksActions} from '../reducers/book'
import toastr from 'toastr/build/toastr.min';
import {createFetchThunk} from '../utils/createThunk';
const {gettingUserBooks, UserBookSuccess, addBookSuccess, UserBookFailure} = userBooksActions
const {fetchingBooks, fetchBooksSuccess, fetchBooksFailure} = fetchBooksActions

export const fetchUserBooks = createFetchThunk('/api/books/auth', gettingUserBooks, UserBookFailure, UserBookSuccess)

export function addBookToUser(formData) {

    return async dispatch => {
        dispatch(gettingUserBooks())
        try {
            const response = await fetch("/api/books/", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            toastr.success("YOU SUCCESSFULLY HAVE ADDED A NEW BOOK", data)
            dispatch(addBookSuccess(data))
        } catch (error) {
            console.log("ERROR IS", error)
            dispatch(UserBookFailure())
        }
    }
}
export const fetchBooks = createFetchThunk('api/books/', fetchingBooks, fetchBooksSuccess, fetchBooksFailure)

export function fetchBooksByQuery(query) {
    return async dispatch => {
        dispatch(fetchingBooks())

        try {
            console.log("QUERY IS", query)
            const response = await fetch(`api/books?search=${query}`)
            const data = await response.json()

            dispatch(fetchBooksSuccess(data))
        } catch (error) {
            dispatch(fetchBooksFailure())
        }
    }
}
