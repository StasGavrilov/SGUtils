import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href='/' className='text-2xl flex items-center h-14 text-[#f39c12]'>
      <Image
        src={'/icons/sgu.jpg'}
        alt={'emblem'}
        width={40}
        height={40}
        className='rounded'
      />
      <span
        className='opacity-0 max-w-0 overflow-hidden invisible absolute left-0 transition-all duration-0 ease-in-out
          lg:relative lg:opacity-100 lg:max-w-[150px] lg:visible lg:duration-700 ml-1'
      >
        StasUtils.
      </span>
    </Link>
  )
}
