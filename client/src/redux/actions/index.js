import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  LOADING,
  SELECTED_CONVERSATION_CHANGED,
  NEW_MESSAGE_ADDED,
  DELETE_CONVERSATION,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });

  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });

  setTimeout(() => {
    dispatch({ type: LOADING, payload: false });
  }, 5000);
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const conversationChanged = (conversationId) => ({
  type: SELECTED_CONVERSATION_CHANGED,
  conversationId,
});

export const newMessageAdded = (textMessage) => ({
  type: NEW_MESSAGE_ADDED,
  textMessage,
});

export const conversationDeleted = () => ({
  type: DELETE_CONVERSATION,
});
