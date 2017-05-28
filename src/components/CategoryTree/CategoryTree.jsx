import React, {Component} from 'react'
import Category from "./Category";
import {Panel} from "react-bootstrap";

export default class CategoryTree extends Component {

    render() {
        const {categories} = this.props;

        const c = categories[0];
        //return <Category id={c.id} title={c.title} children={c.childs}/>

        let map = categories.map(c => {
            return <Category id={c.id} title={c.title} children={c.childs}/>
        });
        return <Panel>{map}</Panel>
    }
}