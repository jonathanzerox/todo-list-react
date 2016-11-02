import {REMOVE_INCOMPLETE_TASK, ADD_NEW_TASK} from '../actions/action-types';

export default function(state=null, action) {

    switch (action.type) {
        case REMOVE_INCOMPLETE_TASK:
            return state.filter(task => task.taskName !== action.payload.taskName);
        break;

        case ADD_NEW_TASK:
            return [{'taskName': action.payload}, ...state];
        break;
    }

    if(!state){
        return [
            {taskName: 'Pick up milk', visibility: true},
            {taskName: 'Grocery shopping', visibility: true},
            {taskName: 'Hem Pants', visibility: true}
        ]
    } else {
        return state;
    }
}
