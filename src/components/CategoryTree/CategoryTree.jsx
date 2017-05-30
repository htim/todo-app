import React, {Component} from 'react'
import Category from "./Category";
import {Panel} from "react-bootstrap";
import _ from "lodash"

export default class CategoryTree extends Component {

    buildTree = (array, parent, tree) => {
        tree = typeof tree !== 'undefined' ? tree : [];
        parent = typeof parent !== 'undefined' ? parent : {id: 0};

        let children = _.filter(array, child => {
            return child.parentId === parent.id;
        });

        if (!_.isEmpty(children)) {
            if (parent.id === 0) {
                tree = children;
            } else {
                parent.childs = children
            }
            _.each(children, child => {
                this.buildTree(array, child)
            });
        }

        return tree;
    };

    renderCategories = () => {
        const {categories} = this.props;
        const categoriesTree = this.buildTree(categories);
        return categoriesTree.map(c => {
            return <Category id={c.id} title={c.title} children={c.childs}/>
        });
    }

    render() {
        return <Panel>{this.renderCategories()}</Panel>
    }
}