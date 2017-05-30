import {applyMiddleware, combineReducers, createStore} from "redux"
import {categories} from "../reducers/index"
import {createLogger} from "redux-logger"

export const store = createStore(
    combineReducers({
            categories: categories
        }
    ),
    applyMiddleware(
        createLogger()
    )
);

