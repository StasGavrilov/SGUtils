import Logo from './Logo'
import NavBar from './NavBar'
import { header, pipe } from './classes'

export default function Header() {
  return (
    <div className="relative">
      <header className={header}>
        <Logo />
        <div className={pipe} />
        <NavBar />
      </header>
    </div>
  )
}
