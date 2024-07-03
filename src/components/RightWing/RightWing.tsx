import { useOutsideClick } from '../../helpers/useOutsideClick'
import Box from '../Box/Box'

interface IRightWing {
    isOpen: boolean
    closeWing: () => void
    handleSubmit: () => void
    title: string
}

export default function RightWing({ title, isOpen, closeWing, handleSubmit }: IRightWing) {
    const ref = useOutsideClick(closeWing)

    return (
        <div ref={ref} className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0 w-[45%]' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={closeWing} className="p-2 absolute right-3 top-3 rounded-full w-6 h-6 flex justify-center items-center">X</button>

            <Box title={title}>
                <button onClick={handleSubmit} className="bg-main text-white p-2 absolute right-3 bottom-3 rounded hover:bg-secondary">Submit</button>
            </Box>
        </div>
    )
}
