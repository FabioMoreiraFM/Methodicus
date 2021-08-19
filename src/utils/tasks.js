import * as DateUtils from 'utils/date';

export const loadTaskNearEnd = (tasks, NOTIFICATIONS_LIMIT) => {
    let taskList = []
    let count = 0

    Object.keys(tasks).forEach(key => {
        if (count != NOTIFICATIONS_LIMIT) {
            let task = tasks[key]
            const limitDateThrowWarn = DateUtils.addDays(new Date(), 3)

            if (task.endDate) {
                const taskDate = DateUtils.addDays(task.endDate, 3)
                const currentDate = new Date().setHours(0, 0, 0, 0)

                if (taskDate <= limitDateThrowWarn && taskDate >= currentDate) {
                    count++
                    taskList.push(task)
                }
            }
        }
    })

    return taskList
}