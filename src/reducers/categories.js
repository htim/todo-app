import {CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE} from '../actions/constants'
import * as _ from "lodash";


const getNextId = (categories) => {
    if (!categories) {
        return 0;
    }
    const ids = categories.map(x => x.id);
    return Math.max(...ids) + 1;
};

const generateInitialState = () => {
    const c1 = {id: 1, title: "title1", parentId: 0};
    const c2 = {id: 2, title: "title2", parentId: 1};
    const c1_1 = {id: 3, title: "title3", parentId: 1};
    const c1_2 = {id: 4, title: "title4", parentId: 2};
    const c1_1_1 = {id: 5, title: "title5", parentId: 3};
    return [c1, c2, c1_1, c1_2, c1_1_1];
};

const createCategory = (id, title) => {
    return {
        id,
        title,
        parentId: 0
    }
};

export const categories = (state = generateInitialState(), action) => {
    switch (action.type) {
        case CATEGORY_ADD: {
            const id = getNextId(state);
            const category = createCategory(id, action.title);
            return [
                category,
                ...state
            ]
        }
        case CATEGORY_REMOVE: {
            const id = action.id;
            return _.filter(state, c => {
                return c.id !== id
            })
        }
        case CATEGORY_UPDATE: {
            const id = action.id;
            const title = action.title;
            const oldCategory = _.first(_.filter(state, c => c.id === id));
            oldCategory.title = title;
            return [
                oldCategory,
                ..._.filter(state, c => {
                    return c.id !== id
                })
            ]
        }
        default:
            return state;
    }
};