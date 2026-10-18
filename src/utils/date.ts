const formatter = new Intl.DateTimeFormat("es", { month: "long", year: "numeric" })

export const formatMonthYear = (date: Date) => formatter.format(date)
