interface ITitle {
  title: string
  children: React.ReactNode
}

export default function Box({ title, children }: ITitle) {
  return (
    <div className='md:p-20 md:ml-[-6rem] md:mt-4 transition-all duration-500 ease-in-out flex flex-col justify-center w-full'>
      <h2 className='md:text-2xl text-lg'>{title}</h2>
      <main className='p-2 mt-4'>
        {children}
      </main>
    </div>
  )
}