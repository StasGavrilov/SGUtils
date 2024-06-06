interface ResultProps {
  value: number | ''
  unit: string
}

export default function Result({ value, unit }: ResultProps) {
  const calculateResult = () => {
    if (value === '') return '-'

    const hoursInDay = 24
    const daysInWeek = 7
    const daysInMonth = 30
    const daysInYear = 365

    let result = ''

    if (unit === 'Years') {
      const years = Math.floor(value / (hoursInDay * daysInYear))
      const remainingDaysAfterYears = Math.floor(value % (hoursInDay * daysInYear) / hoursInDay)

      const months = Math.floor(remainingDaysAfterYears / daysInMonth)
      const remainingDaysAfterMonths = remainingDaysAfterYears % daysInMonth

      result = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, and ${remainingDaysAfterMonths} day${remainingDaysAfterMonths !== 1 ? 's' : ''}`
    } else if (unit === 'Months') {
      const months = Math.floor(value / (hoursInDay * daysInMonth))
      const remainingDaysAfterMonths = Math.floor(value % (hoursInDay * daysInMonth) / hoursInDay)

      const weeks = Math.floor(remainingDaysAfterMonths / daysInWeek)
      const remainingDaysAfterWeeks = remainingDaysAfterMonths % daysInWeek

      result = `${months} month${months !== 1 ? 's' : ''}, ${weeks} week${weeks !== 1 ? 's' : ''}, and ${remainingDaysAfterWeeks} day${remainingDaysAfterWeeks !== 1 ? 's' : ''}`
    } else if (unit === 'Weeks') {
      const weeks = Math.floor(value / (hoursInDay * daysInWeek))
      const remainingDaysAfterWeeks = Math.floor(value % (hoursInDay * daysInWeek) / hoursInDay)

      result = `${weeks} week${weeks !== 1 ? 's' : ''} and ${remainingDaysAfterWeeks} day${remainingDaysAfterWeeks !== 1 ? 's' : ''}`
    } else {
      const days = Math.floor(value / hoursInDay)
      const hours = value % hoursInDay

      result = `${days} day${days !== 1 ? 's' : ''} and ${hours} hour${hours !== 1 ? 's' : ''}`
    }

    return result
  }

  return <span>{calculateResult()}</span>
}
