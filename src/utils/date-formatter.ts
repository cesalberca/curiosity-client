export function getFormattedDate(date: Date) {
  return date.toISOString().substring(0, 10)
}
