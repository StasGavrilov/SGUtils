interface ResultProps {
  value: number | ''
  fromUnit: string
  toUnit: string
}

export default function Result({ value, fromUnit, toUnit }: ResultProps) {
  const calculateResult = () => {
    if (value === '') return '-'

    const hoursInDay = 24
    const daysInWeek = 7
    const daysInMonth = 30
    const daysInYear = 365

    let totalHours = 0
    switch (fromUnit) {
      case 'Hours':
        totalHours = value
        break
      case 'Days':
        totalHours = value * hoursInDay
        break
      case 'Weeks':
        totalHours = value * hoursInDay * daysInWeek
        break
      case 'Months':
        totalHours = value * hoursInDay * daysInMonth
        break
      case 'Years':
        totalHours = value * hoursInDay * daysInYear
        break
      default:
        return '-'
    }

    let result = ''

    switch (toUnit) {
      case 'Years':
        const years = Math.floor(totalHours / (hoursInDay * daysInYear))
        const remainingDaysAfterYears = Math.floor((totalHours % (hoursInDay * daysInYear)) / hoursInDay)
        const monthsInYears = Math.floor(remainingDaysAfterYears / daysInMonth)
        const remainingDaysAfterMonthsInYears = remainingDaysAfterYears % daysInMonth
        result = `
        ${years} year${years !== 1 ? 's' : ''},
        ${monthsInYears} month${monthsInYears !== 1 ? 's' : ''},
        and ${remainingDaysAfterMonthsInYears}
        day${remainingDaysAfterMonthsInYears !== 1 ? 's' : ''}
        `
        break
      case 'Months':
        const months = Math.floor(totalHours / (hoursInDay * daysInMonth))
        const remainingDaysAfterMonths = Math.floor((totalHours % (hoursInDay * daysInMonth)) / hoursInDay)
        const weeksInMonths = Math.floor(remainingDaysAfterMonths / daysInWeek)
        const remainingDaysAfterWeeksInMonths = remainingDaysAfterMonths % daysInWeek
        result = `
        ${months} month${months !== 1 ? 's' : ''},
        ${weeksInMonths} week${weeksInMonths !== 1 ? 's' : ''},
        and ${remainingDaysAfterWeeksInMonths}
        day${remainingDaysAfterWeeksInMonths !== 1 ? 's' : ''}
        `
        break
      case 'Weeks':
        const weeks = Math.floor(totalHours / (hoursInDay * daysInWeek))
        const remainingDaysAfterWeeks = Math.floor((totalHours % (hoursInDay * daysInWeek)) / hoursInDay)
        result = `${weeks} week${weeks !== 1 ? 's' : ''} and ${remainingDaysAfterWeeks} day${remainingDaysAfterWeeks !== 1 ? 's' : ''}`
        break
      case 'Days':
        const days = Math.floor(totalHours / hoursInDay)
        const hoursInDays = totalHours % hoursInDay
        result = `${days} day${days !== 1 ? 's' : ''} and ${hoursInDays} hour${hoursInDays !== 1 ? 's' : ''}`
        break
      default:
        result = `${totalHours} hour${totalHours !== 1 ? 's' : ''}`
    }

    return result
  }

  return <span>{calculateResult()}</span>
}
