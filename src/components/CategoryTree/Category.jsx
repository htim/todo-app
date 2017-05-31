import React, {Component} from 'react'
import {Button, ButtonGroup, Glyphicon} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Category.css"


export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {showChilds: false};
    }

    toggleVisible = () => {
        this.setState({
            showChilds: !this.state.showChilds
        })
    };

    removeCategory = () => {
        this.props.removeCategory(this.props.id);
    };

    updateCategory = () => {
        console.log(this.props.id);
        this.props.updateCategory(this.props.id);
    };

    render() {
        const {id, title, children} = this.props;

        let childNodes;

        if (!!children) {
            childNodes = children.map(el => {
                return <div key={el.id}><Category id={el.id} title={el.title} children={el.childs}
                                                  removeCategory={this.props.removeCategory}
                                                  updateCategory={this.props.updateCategory}/></div>
            })
        }

        return (
            <div>
                <div className="Category-box">
                    <span>
                        <NavLink activeClassName="Category-active-link" to={`/category/${id}`}>{title}</NavLink>
                        {!!children &&
                        <Glyphicon glyph={this.state.showChilds ? "chevron-down" : "chevron-right"}
                                   onClick={this.toggleVisible}/>}
                    </span>
                    <span>
                        <ButtonGroup bsSize="xsmall">
                            <Button onClick={this.updateCategory}><Glyphicon
                                glyph="edit"/></Button>
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
