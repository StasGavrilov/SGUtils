import {
  boxResponsiveDivider,
  boxShowOnlyTablets,
  boxShowOnlyLaptops,
  titleResponsiveDivider,
  titleShowOnlyMobiles,
} from "./classes"

interface ITitle {
  title: string
  children: React.ReactNode
}

export default function Box({ title, children }: ITitle) {
  return (
    <div className={`${boxResponsiveDivider} ${boxShowOnlyTablets} ${boxShowOnlyLaptops}`}>
      <h2 className={`${titleResponsiveDivider} ${titleShowOnlyMobiles}`}>{title}</h2>
      <main className='p-2 md:mt-4'>
        {children}
      </main>
    </div>
  )
}