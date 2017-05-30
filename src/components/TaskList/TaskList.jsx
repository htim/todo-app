import React, {Component} from 'react'
import {Panel} from "react-bootstrap";
import Task from "./Task";

export default class TaskList extends Component {

    render() {
        const {tasks} = this.props;

        const tasksComponents = tasks.map(t => {
            return <Task key={t.id} title={t.title} isComplete={t.isComplete}/>
        })

        return (
            <Panel>{tasksComponents}</Panel>
        )

    }
}