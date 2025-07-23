import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

import { buttonResponsiveDivider, buttonHover } from './classes'

interface ButtonProps {
    label: string
    onClick: () => void
    disabled?: boolean
}

export default function Button({ label, onClick, disabled }: ButtonProps) {
    return (
        <button
            className={`${buttonResponsiveDivider} ${buttonHover}`}
            onClick={onClick}
            disabled={disabled}
        >
            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
            {label}
        </button>
    )
}
