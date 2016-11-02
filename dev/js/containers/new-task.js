import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class NewTask extends Component {

    constructor(props) {
        super(props);

        this.state = { taskName: '' }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={this.onFormSubmit} className='form-inline'>
                        <div className='input-group modal-form'>
                            <input
                                value={this.state.taskName}
                                onChange={event => this.setState({taskName: event.target.value})}
                                className='form-control'
                                placeholder="Enter new task name..." />
                            <span className="input-group-btn">
                                <button className='btn btn-primary'>Add Task</button>
                            </span>
                        </div>

                    </form>
                </Modal.Body>

                <Modal.Footer />
            </Modal>
        )
    }
}

export default NewTask;
