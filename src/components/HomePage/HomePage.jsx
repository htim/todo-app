import React, {Component} from "react";
import {Col, Row, Grid, FormControl, FormGroup, InputGroup, Glyphicon, ProgressBar, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./HomePage.css"
import Category from "../CategoryTree/Category";
import CategoryTree from "../CategoryTree/CategoryTree";
import TaskList from "../TaskList/TaskList";

export default class HomePage extends Component {

    generateCategories = () => {
        const c1 = {id: 1, title: "title1"};
        const c2 = {id: 2, title: "title2"};
        const c1_1 = {id: 3, title: "title3"};
        const c1_2 = {id: 4, title: "title4"};
        const c1_1_1 = {id: 5, title: "title5"};
        c1_1.childs = [c1_1_1];
        c1.childs = [c1_1, c1_2];
        return [c1, c2];
    };

    generateTasks = () => {
        const task1 = {id: 1, title: "Todo Item #1", isComplete:false};
        const task2 = {id: 2, title: "Todo Item #2", isComplete:true};
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
                                <FormGroup>
                                    <InputGroup>
                                        <FormControl type="text" placeholder="category name"/>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="plus"/>
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
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
                        <Row>
                            <Col md={4}>
                                <CategoryTree categories={this.generateCategories()}/>
                            </Col>
                            <Col md={8}>
                                <TaskList tasks={this.generateTasks()}/>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Grid>
        )
    }

}