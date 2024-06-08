import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IAddMonth {
    handleSubmit: () => void
}

export default function AddMonth({ handleSubmit }: IAddMonth) {
    return (
        <button
            className='bg-[#2c3e50] p-1 m-1 w-40 h-9 flex justify-center items-center rounded hover:bg-[#18bc9c] text-white'
            onClick={handleSubmit}
        >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            New month
        </button>
    )
}
