export const TASK_COMPLETED = 'TASK_COMPLETED';
export const REMOVE_COMPLETED_TASK = 'REMOVE_COMPLETED_TASK';
export const REMOVE_INCOMPLETE_TASK = 'REMOVE_INCOMPLETE_TASK';

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
