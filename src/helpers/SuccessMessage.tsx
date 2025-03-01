export default function SuccessMessage({ message }: { message: string | number | null }) {
    if (!message) return null

    return (
        <div className="text-secondary px-4 py-2 font-[600]">
            {message}
        </div>
    )
}
