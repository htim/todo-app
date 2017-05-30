import {CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE} from "./constants"

export const addCategory = (title) => {
    return {
        type: CATEGORY_ADD,
        title
    }
};

export const removeCategory = (id) => {
    return {
        type: CATEGORY_REMOVE,
        id
    }
};

export const updateCategory = (id, title) => {
    return {
        type: CATEGORY_UPDATE,
        id,
        title
    }
}

