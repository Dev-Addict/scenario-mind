import {combineReducers, createStore} from 'redux';

import {questionsReducer} from "./questions/reducers";

export const rootReducer = combineReducers({
    questions: questionsReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export default store;
