import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full h-16 lg:h-16 bg-main flex items-center px-4 shadow-md z-50 transition-all duration-500 ease-in-out">
        <Logo />
        <div className="mx-8 w-[1.5px] h-10 lg:w-[1.5px] bg-secondary shadow-md opacity-50 rounded transition-all duration-700 ease-in-out" />
        <NavBar />
      </header>
    </div>
  )
}
