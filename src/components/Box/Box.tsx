interface ITitle {
    title: string
    children: React.ReactNode
    className: any
}

export default function Box({title, className, children}: ITitle) {
  return (
    <div className="p-4">
        <h2 className={className}>{title}</h2>

        <main className="p-2 mt-4">
          {children}
        </main>
    </div>
  )
}
