import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='text-3xl flex items-center bg-slate-300 h-14'>
      <span className='ml-3'>Stas</span>
      <span className=''>Bot</span>
      <span className=''>.</span>
    </Link>
  )
}
