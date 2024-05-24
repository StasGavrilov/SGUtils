interface ResultProps {
    value: number | ''
    unit: string
  }

export default function Result({ value, unit }: ResultProps) {
    const calculateResult = () => {
      if (value === '') return '-'
      let result

      switch (unit) {
        case 'Days':
          result = value / 24
          break
        case 'Weeks':
          result = value / (24 * 7)
          break
        case 'Months':
          result = value / (24 * 30)
          break
        case 'Years':
          result = value / (24 * 365)
          break
        default:
          result = value
      }

      return result.toFixed(2)
    }

    return <span>{calculateResult()}</span>
}