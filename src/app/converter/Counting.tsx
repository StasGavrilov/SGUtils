import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ICounting {
  value: number | ""
}

export default function Counting({ value }: ICounting) {
  return (
    <div>
      <span>
        {value ? (
          <div>
            <FontAwesomeIcon icon={faSpinner} className="mr-1 animate-spin" />
            <span>Counting..</span>
          </div>
        ) : 'Waiting'
        }
      </span>
    </div>
  )
}
