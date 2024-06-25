interface ITitle {
  title: string
  children: React.ReactNode
}

export default function Box({ title, children }: ITitle) {
  return (
    <div className="p-4 lg:ml-0 ml-[-6rem] transition-all duration-500 ease-in-out">
      <h2 className='text-2xl'>{title}</h2>
      <main className="p-2 mt-4">
        {children}
      </main>
    </div>
  )
}
