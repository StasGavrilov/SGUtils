interface LoginProps {
    handleClose: () => void
}

export default function Login({ handleClose }: LoginProps) {
    return (
        <div>
            <h1>Hello, Stas! :)</h1>

            <div className='flex flex-col'>
                <span>User</span>
                <input type="text" name="" id="" className='bg-[pink]' />
            </div>

            <div className='flex flex-col'>
                <span>Password</span>
                <input type="password" name="" id="" className='bg-[pink]' />
            </div>

            <button>Login</button>
            <button onClick={handleClose} className="absolute top-2 right-2">X</button>
        </div>
    )
}
