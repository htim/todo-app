import {applyMiddleware, combineReducers, createStore} from "redux"
import {categories} from "../reducers/index"
import {createLogger} from "redux-logger"

export const store = createStore(
    combineReducers({
            categories: categories
        }
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

