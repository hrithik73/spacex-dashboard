export const initStartDate = new Date(2002, 11, 24, 10, 33, 30, 0)
export const initEndDate = new Date(2030, 11, 22, 0, 0, 0, 0)

export const formateDate = (date: Date) => {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}
