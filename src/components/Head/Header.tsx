import LoginAsAdmin from '../Login/LoginAsAdmin'
import Logo from './Logo'
import NavBar from './NavBar'

export default function Header() {
  return (
    <div className='relative'>
      <aside className='absolute h-screen w-40 bg-[#2c3e50] flex flex-col'>
        <Logo />
        <div className="w-[150px] h-[1.5px] bg-[#18bc9c] my-2 mx-auto shadow-md rounded opacity-50" />
        <NavBar />

        <div className="flex-grow"></div>

        <LoginAsAdmin />
      </aside>
    </div>
  )
}
