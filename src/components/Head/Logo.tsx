import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='text-2xl flex items-center justify-center h-14 text-[#f39c12] font-bold'>
      <span className="text-[#f39c12] px-1 py-1 rounded text-lg shadow-md lg:hidden">
        SGU
      </span>
      <span
        className='opacity-0 max-w-0 overflow-hidden invisible absolute left-0 transition-all duration-0 ease-in-out
          lg:relative lg:opacity-100 lg:max-w-[150px] lg:visible lg:duration-700 ml-1'
      >
        StasUtils.
      </span>
    </Link>
  )
}
