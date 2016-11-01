import {REMOVE_INCOMPLETE_TASK} from '../actions/index';

export default function(state=null, action) {

    switch (action.type) {
        case REMOVE_INCOMPLETE_TASK:
            return state.filter(task => task.taskName !== action.payload.taskName);
        break;
    }

    return [
        {taskName: 'Pick up milk', visibility: true},
        {taskName: 'Grocery shopping', visibility: true},
        {taskName: 'Hem Pants', visibility: true}
    ]
}
