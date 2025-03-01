export default function ErrorMessage({ error }: { error: string }) {
    if (!error) return null

    return (
        <div className="text-red px-4 py-2 font-[600]">
            {error}
        </div>
    )
}
