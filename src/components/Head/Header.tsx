import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='relative'>
      <aside className='absolute h-screen bg-main flex flex-col items-center w-16 lg:w-40 transition-all duration-500 ease-in-out'>
        <Logo />
        <div className="w-10 lg:w-[90%] h-[1.5px] bg-secondary my-2 mx-auto shadow-md rounded opacity-50 transition-all duration-500 ease-in-out" />
        <NavBar />

        <div className="flex-grow"></div>
      </aside>
    </div>
  )
}
