import {messageActions} from '../reducers/message';
import {createFetchThunk} from '../utils/createThunk.js';
const {fetchingMessages, fetchMessageSuccess, fetchMessageFailure} = messageActions;

export const fetchMessages = createFetchThunk('api/messages', fetchingMessages, fetchMessageFailure, fetchMessageSuccess);
