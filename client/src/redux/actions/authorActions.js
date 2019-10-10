import * as types from "./actionTypes";
import * as authorApi from "../../api/authorAPI";

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

// Async in Redux - Add First Thunk - 1:25
export function loadCourses() {
    return function (dispatch) {
        return courseApi
            .getAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw error;
            });
    };
}
