import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ICounting {
  value: number | ""
}

export default function Counting({ value }: ICounting) {
  return (
    <div>
      {value ? <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" /> : 'Waiting'}
    </div>
  )
}
