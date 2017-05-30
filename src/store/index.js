import {combineReducers, createStore} from "redux"
import {categories} from "../reducers/index"


export const store = createStore(
    combineReducers({
            categories: categories
        }
    )
);

