import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

require('../../scss/style.scss');

import IncompleteTasks from '../containers/incomplete-tasks';
import CompleteTasks from '../containers/complete-tasks';

const App = () => {
    return (
        <Grid>
            <Row className='show-grid'>
                <Col xs={6} md={6}>
                    <h2>Todo List</h2>
                </Col>

                <Col xs={6} md={6}>
                    <Button bsStyle='primary' className='pull-right nwtask'>New Task</Button>
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
        </Grid>
    )
}

export default App;
