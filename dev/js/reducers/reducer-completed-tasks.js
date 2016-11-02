import {TASK_COMPLETED, REMOVE_COMPLETED_TASK} from '../actions/action-types';

export default function(state=null, action) {
    switch (action.type) {
        case TASK_COMPLETED:
            if(!state) {
                return [action.payload]
            } else {
                return [action.payload, ...state];
            }
        break;

        case REMOVE_COMPLETED_TASK:
            return state.filter(task => task.taskName !== action.payload.taskName);
        break;

        default:
            return state;
        break;
    }
}
