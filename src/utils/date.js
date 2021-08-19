export const addDays = (date, days) => {
    let currentDate = new Date(date)
    currentDate.setDate(currentDate.getDate() + days)
    currentDate.setHours(0, 0, 0, 0)

    return currentDate
}