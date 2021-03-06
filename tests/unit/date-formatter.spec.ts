import { getFormattedDate } from '@/utils/date-formatter'

describe('formats the date correctly', () => {
  it('retrieves only the date, ignoring the time', () => {
    const givenDate = new Date(1995, 3, 15, 12, 12, 12)
    const actualDate = getFormattedDate(givenDate)
    expect(actualDate).toBe('1995-04-15')
  })
})
