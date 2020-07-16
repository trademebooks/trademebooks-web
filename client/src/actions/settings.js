import {settingActions} from '../reducers/settings.js';
import {createFetchThunk, createPostThunk} from '../utils/createThunk.js';
const {fetchingSettings, fetchSettingsSuccess, fetchSettingsFailure, updateSettingsSuccess} = settingActions;
console.log(settingActions)
export const fetchSettings = createFetchThunk('api/settings', fetchingSettings, fetchSettingsFailure, fetchSettingsSuccess);
export const updateSettings = createPostThunk('api/settings', fetchingSettings, fetchSettingsFailure, updateSettingsSuccess);