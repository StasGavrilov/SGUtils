import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IStyledIcons {
  icon: IconDefinition
  className: string
}

export default function StyledIcons({ icon, className }: IStyledIcons) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} className={className} />
    </div>
  )
}