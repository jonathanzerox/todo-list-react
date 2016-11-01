import {TASK_COMPLETED, REMOVE_COMPLETED_TASK} from '../actions/index';

export default function(state=null, action) {
    switch (action.type) {
        case TASK_COMPLETED:

            const finishedTasks = [];

            if(!state) {
                return [action.payload]
            } else {
                finishedTasks.push(...state, action.payload);
            }

            return finishedTasks;
        break;

        case REMOVE_COMPLETED_TASK:
            return state.filter(task => task.taskName !== action.payload.taskName);
        break;

        default:
            return state;
        break;
    }
}
