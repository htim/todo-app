import React, {Component} from "react";
import {Col, Row, Grid, FormControl, FormGroup, InputGroup, Glyphicon, ProgressBar, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./HomePage.css"
import CategoryTree from "../CategoryTree/CategoryTree";
import TaskList from "../TaskList/TaskList";
import ConnectedCategoryTree from "../../containers/ConnectedCategoryTree/ConnectedCategoryTree";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    generateTasks = () => {
        const task1 = {id: 1, title: "Todo Item #1", isComplete: false};
        const task2 = {id: 2, title: "Todo Item #2", isComplete: true};
        return [task1, task2]
    };


    render() {
        return (
            <Grid>
                <Col md={12} xs={12}>
                    <Row>
                        <Row>
                            <Col md={6} xs={6}>
                                <div className="HomePage-title">
                                    <Link to="/">To Do List</Link>
                                </div>
                            </Col>
                            <Col md={4} mdOffset={2} xs={6}>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="search"/>
                                        </InputGroup.Addon>
                                        <FormControl type="text"/>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <ProgressBar bsStyle="success" now={40}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <ConnectedCategoryTree/>
                            </Col>
                            <Col md={4} mdOffset={4}>
                                <FormGroup>
                                    <InputGroup>
                                        <FormControl type="text" placeholder="task name"/>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="plus"/>
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Grid>
        )
    }

}