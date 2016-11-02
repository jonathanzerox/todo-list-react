import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

require('../../scss/style.scss');

import IncompleteTasks from '../containers/incomplete-tasks';
import CompleteTasks from '../containers/complete-tasks';
import NewTask from '../containers/new-task';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <Grid>
                <Row className='show-grid'>
                    <Col xs={6} md={6}>
                        <h2>Todo List</h2>
                    </Col>

                    <Col xs={6} md={6}>
                        <Button bsStyle='primary' className='pull-right nwtask' onClick={() => this.setState({showModal: true})}>New Task</Button>
                    </Col>
                </Row>

                <Row className='divider'>
                    <Col xs={6} md={6}>
                        <IncompleteTasks />
                    </Col>

                    <Col xs={6} md={6}>
                        <CompleteTasks />
                    </Col>
                </Row>

                <Row>
                    <NewTask showModal={this.state.showModal} closeModal={() => this.setState({showModal: false})} />
                </Row>
            </Grid>
        )
    }
}

export default App;
