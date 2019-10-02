import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // 3. debugger; -- test here
            return [...state, {...action.course}];
        default:
            return state;
    }
}