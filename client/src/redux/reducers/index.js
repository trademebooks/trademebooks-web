import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import loadingReducer from "./loadingReducer";
import {userBookSlice, bookSlice} from '../../reducers/book';
import {messageSlice} from '../../reducers/message';
import {settingSlice} from '../../reducers/settings'
export default combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    form: reduxForm,
    books: bookSlice.reducer,
    userBooks: userBookSlice.reducer,
    messages: messageSlice.reducer,
    settings: settingSlice.reducer
});
