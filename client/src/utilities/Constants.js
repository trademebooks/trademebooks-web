export const BASE_URL = 'http://localhost:8100/api/web/v1/';

export const REGISTER_URL = BASE_URL + 'auth/register';
export const LOGIN_URL = BASE_URL + 'auth/login';
export const LOGOUT_URL = BASE_URL + 'auth/logout';
export const USER_PROFILE_URL = BASE_URL + 'user/profile';

export const GET_ALL_PUBLIC_BOOKS_URL = BASE_URL + 'books';
export const GET_ONE_BOOK_URL = BASE_URL + 'books/';
export const CREATE_A_Book_URL = BASE_URL + 'books';
export const UPDATE_A_BOOK_URL = BASE_URL + 'books/';
export const DELETE_A_BOOK_URL = BASE_URL + 'books/';

export const WEBSOCKET_URL_1 = 'http://127.0.0.1:8100/ws';
export const WEBSOCKET_URL_2 = 'http://127.0.0.1:8100/topic/public';
export const WEBSOCKET_URL_3 = 'http://127.0.0.1:8100/app/addUser';
export const WEBSOCKET_URL_4 = 'http://127.0.0.1:8100/app/sendMessage';