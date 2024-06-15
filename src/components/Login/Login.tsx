interface LoginProps {
    handleClose: () => void;
}

export default function Login({ handleClose }: LoginProps) {
    return (
        <div className=" h-full flex flex-col justify-center items-center text-main">
            <h1 className="absolute top-16 text-center text-2xl">Hello, Stas! :)</h1>

            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col w-[275px] mb-4">
                    <span>User</span>
                    <input type="text" className="bg-white p-2 rounded border hover:border-secondary" />
                </div>

                <div className="flex flex-col w-[275px] mb-4">
                    <span>Password</span>
                    <input type="password" className="bg-white p-2 rounded border hover:border-secondary" />
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button className="absolute bottom-4 p-2 rounded w-24 bg-main text-white hover:bg-secondary">Login</button>
            </div>

            <button onClick={handleClose} className="absolute top-2 right-2 ">X</button>
        </div>
    );
}
