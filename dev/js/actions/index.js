import {ADD_NEW_TASK, TASK_COMPLETED, REMOVE_COMPLETED_TASK, REMOVE_INCOMPLETE_TASK} from './action-types'

export function addNewTask(task) {
    return {
        type: ADD_NEW_TASK,
        payload: task
    }
}

export function completedTask(task) {
    return {
        type: TASK_COMPLETED,
        payload: task
    }
}

export function removeIncompleteTask(task) {
    return {
        type: REMOVE_INCOMPLETE_TASK,
        payload: task
    }
}

export function removeCompleteTask(task) {
    return {
        type: REMOVE_COMPLETED_TASK,
        payload: task
    }
}
