import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href='/' className='text-2xl flex items-center h-14 text-[#f39c12]'>
      <Image
        src={'/icons/sgb.jpg'}
        alt={'emblem'}
        width={25}
        height={25}
        className='rounded'
      />
      <span className='ml-2 hidden lg:inline'>StasBot.</span>
    </Link>
  )
}
