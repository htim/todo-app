import React, {Component} from 'react'
import {Button, ButtonGroup, Col, Glyphicon, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Category.css"


export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {showChilds: false};
        this.removeCategory = this.removeCategory.bind(this)
    }

    toggle = () => {
        this.setState({showChilds: !this.state.showChilds})
    };

    removeCategory = () => {
        this.props.removeCategory(this.props.id)
    }

    render() {
        const {id, title, children} = this.props;

        let childNodes;

        if (!!children) {
            childNodes = children.map(el => {
                return <div key={el.id}><Category id={el.id} title={el.title} children={el.childs}/></div>
            })
        }

        return (
            <div>
                <div className="Category-box">
                    <span>
                        <NavLink activeClassName="Category-active-link" to={`/category/${id}`}>{title}</NavLink>
                        {!!children &&
                        <Glyphicon glyph={this.state.showChilds ? "chevron-down" : "chevron-right"}
                                   onClick={this.toggle}/>}
                    </span>
                    <span>
                        <ButtonGroup bsSize="xsmall">
                            <Button><Glyphicon glyph="edit"/></Button>
                            <Button><Glyphicon glyph="plus"/></Button>
                            <Button onClick={this.removeCategory}><Glyphicon glyph="trash"/></Button>
                        </ButtonGroup>
                    </span>
                </div>
                <div className={this.state.showChilds ? "Category-child" : "Category-child-hide"}>
                    {childNodes}
                </div>
            </div>
        )
    }
}
