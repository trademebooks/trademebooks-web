/*
    returns a Thunk that fetches a route and dispatches either pending or failure
*/

export function createFetchThunk(route, pending, failure, success) {
    console.log(pending)
    return () => {
        return async dispatch => {
            dispatch(pending())

            try {
                const response = await fetch(route)
                const data = await response.json()
                dispatch(success(data))
                return data
            } catch (error) {
                console.log(error)
                dispatch(failure())
                return error
            }
        }
    }
}
export function createPostThunk(route, pending, failure, success) {
    return (formData) => {
        return async dispatch => {
            dispatch(pending())
            try {
                const response = await fetch(route, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                const data = await response.json()
                dispatch(success(data))
            } catch (error) {
                console.log("ERROR IS", error)
                dispatch(failure)
            }
        }
    }
}