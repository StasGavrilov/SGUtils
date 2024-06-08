import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen text-xl'>
      <FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" />
      <p>Loading...</p>
    </div>
  )
}
