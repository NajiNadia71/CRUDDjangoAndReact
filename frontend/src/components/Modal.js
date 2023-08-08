import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };
 

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Countries</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="country-title">Title</Label>
                            <Input
                                type="text"
                                id="country-title"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter country Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="country-description">Description</Label>
                            <Input
                                type="text"
                                id="country-description"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter country description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="country-continent">Title</Label>
                            <Input
                                type="text"
                                id="country-continent"
                                name="continent"
                                value={this.state.activeItem.continent}
                                onChange={this.handleChange}
                                placeholder="Enter country continent"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}