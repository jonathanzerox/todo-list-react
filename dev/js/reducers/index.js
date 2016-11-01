import {combineReducers} from 'redux';
import IncompleteTasks from './reducer-incomplete-tasks';
import CompleteTasks from './reducer-completed-tasks';

const allReducers = combineReducers({
    incompleteTasks: IncompleteTasks,
    completeTasks: CompleteTasks
});

export default allReducers;
