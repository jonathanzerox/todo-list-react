import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removeCompleteTask} from '../actions/index';

class CompleteTasks extends Component {

    listCompletedTasks() {

        return this.props.tasksCompleted.map((task, index) => {
            return (
                <li key={index} className='list-group-item'>
                    <span className='align-task'>{task.taskName}</span>
                    <div className='btn-group pull-right'>
                        <button
                            onClick={() => this.props.removeIncompleteTask(task)}
                            className='btn btn-danger'>Remove</button>
                    </div>
                    <div className='clearfix' />
                </li>
            );
        });
    }

    render() {

        if(!this.props.tasksCompleted) {
            return <div className='no-complete-task'>You must complete atleast 1 Task</div>
        }

        return (
            <div>
                <h4 className='task-headers'>Complete Tasks</h4>
                <ul className='list-group'>
                    {this.listCompletedTasks()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasksCompleted: state.completeTasks
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        removeIncompleteTask: removeCompleteTask
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CompleteTasks);
