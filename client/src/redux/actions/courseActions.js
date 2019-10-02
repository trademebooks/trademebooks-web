import * as types from "./actionTypes";
import * as courseApi from "../../api/courseAPI";

export function createCourse(course) {
    // 2. debugger; -- test here
    return {
        type: types.CREATE_COURSE,
        course // payload
    };
}

export function loadCourseSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}
