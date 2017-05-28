import React, {Component} from 'react'
import {Button, Checkbox, Glyphicon} from "react-bootstrap";
import "./Task.css"

export default class Task extends Component {
    render() {

        const {title, isComplete} = this.props;

        return (
            <div className="Task-box">
                <div className="Task-status">
                    <Checkbox checked={isComplete}/>
                </div>
                <div className="Task-content">
                    {title}
                </div>
                <div className="Task-edit">
                    <Button bsSize="xsmall"><Glyphicon glyph="edit"/></Button>
                </div>
            </div>
        )
    }
}