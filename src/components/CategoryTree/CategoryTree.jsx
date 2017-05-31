import React, {Component} from 'react'
import Category from "./Category";
import {Button, FormControl, FormGroup, Glyphicon, InputGroup, Modal, Panel} from "react-bootstrap";
import _ from "lodash"

export default class CategoryTree extends Component {

    constructor(props) {
        super(props);
        this.state = {showUpdatingModal: false, updatingId: 0}
    }

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

    addCategory = () => {
        const title = this.categoryInput.value;
        this.props.categoryActions.addCategory(title);
        this.categoryInput.value = "";
    };

    openUpdatingModal = (id) => {
        this.setState({
            showUpdatingModal: true,
            updatingId: id
        })
    };

    closeUpdatingModal = () => {
        this.setState({
            showUpdatingModal: false
        })
    };

    updateCategory = (id) => {
        this.openUpdatingModal(id);
    };

    saveNewTitle = () => {
        const title = this.categoryNewTitleInput.value;
        this.props.categoryActions.updateCategory(this.state.updatingId, title);
        this.categoryNewTitleInput.value = "";
        this.closeUpdatingModal();
    };

    renderCategories = () => {
        const {categories, categoryActions} = this.props;
        const tree = this.buildTree(_.cloneDeep(categories));
        return tree.map(c => {
            return <Category key={c.id} id={c.id} title={c.title} children={c.childs}
                             removeCategory={categoryActions.removeCategory}
                             updateCategory={this.updateCategory}/>
        });
    };

    renderUpdatingModal = () => {

        const category = _.first(_.filter(this.props.categories, x => x.id === this.state.updatingId));

        return (
            <Modal show={this.state.showUpdatingModal} onHide={this.closeUpdatingModal}>
                <Modal.Header closeButton>
                    Edit category
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <FormControl type="text" placeholder={(category && category.title) || ""} inputRef={ref => {
                            this.categoryNewTitleInput = ref
                        }}/>
                    </FormGroup>
                    <Button onClick={this.saveNewTitle}>Save</Button>
                    <Button onClick={this.closeUpdatingModal}>Cancel</Button>
                </Modal.Body>
            </Modal>
        )
    };

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="category name" inputRef={ref => {
                            this.categoryInput = ref
                        }}/>
                        <InputGroup.Button>
                            <Button onClick={this.addCategory}><Glyphicon glyph="plus"/></Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
                <Panel>{this.renderCategories()}</Panel>
                {this.renderUpdatingModal()}
            </div>
        )
    }
}