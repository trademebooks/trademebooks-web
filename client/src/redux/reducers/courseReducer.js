import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // 3. debugger; -- test here
            return [...state, {...action.course}];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses; // Handle Loading courses in reducer
        default:
            return state;
    }
}