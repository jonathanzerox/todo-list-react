import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {completedTask, removeIncompleteTask} from '../actions/index';

class IncompleteTasks extends Component {

    showIncompleteTasks() {
        return this.props.incompleteTasks.map((task) => {
            return <li
                key={task.taskName}
                className='list-group-item'>
                <span className='align-task'>{task.taskName}</span>
                <div className='btn-group pull-right'>
                    <button
                        onClick={() => this.props.completedTask(task)}
                        className='btn btn-success'>Completed</button>
                    <button
                        onClick={() => this.props.removeIncompleteTask(task)}
                        className='btn btn-danger'>Remove</button>
                </div>
                <div className='clearfix' />
            </li>
        });
    }

    render() {
        return (
            <div>
                <h4 className='task-headers'>Incomplete Tasks</h4>
                <ul className='list-group'>
                    {this.showIncompleteTasks()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        incompleteTasks: state.incompleteTasks
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        completedTask: completedTask,
        removeIncompleteTask: removeIncompleteTask
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(IncompleteTasks);
