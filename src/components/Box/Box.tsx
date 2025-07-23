interface ITitle {
  title: string
  children: React.ReactNode
}

export default function Box({ title, children }: ITitle) {
  return (
    <div className="w-full px-4 pt-[calc(4rem+5vh)]">
      <h2 className="text-xl sm:text-2xl font-bold ml-2 mb-6">
        {title}
      </h2>
      <main className="p-2">
        {children}
      </main>
    </div>
  )
}