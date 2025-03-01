import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

interface ButtonProps {
    label: string
    onClick: () => void
    disabled?: boolean
}

export default function Button({ label, onClick, disabled }: ButtonProps) {
    return (
        <button
            className="bg-main p-1 m-1 w-40 h-9 flex justify-center items-center rounded text-white cursor-pointer
            hover:bg-secondary hover:text-white hover:font-[600]"
            onClick={onClick}
            disabled={disabled}
        >
            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
            {label}
        </button>
    )
}
