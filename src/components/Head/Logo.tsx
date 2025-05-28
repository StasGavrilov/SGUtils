import Link from 'next/link'

import { link, shortLogo, fullLogoResponsiveDivider, fullLogo } from './classes'

export default function Logo() {
  return (
    <Link href='/' className={link}>
      <span className={shortLogo}>SGU</span>
      <span className={`${fullLogoResponsiveDivider} ${fullLogo}`}>StasUtils.</span>
    </Link>
  )
}
