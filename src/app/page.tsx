import Image from 'next/image'

import Box from "@/components/Box/Box"

export default function Home() {
  return (
    <Box title='Welcome to Stasg-bot application.'>
      <div className='flex justify-center items-center min-h-screen'>
        <Image
          src={'/pictures/pro.jpg'}
          alt={'emblem'}
          width={350}
          height={600}
          className='rounded'
        />

        <div className='py-10 px-24 text-center'>
          <p className='text-3xl'>I am Stas Gavrilov.</p>
          <p className='text-2xl'>Working at Infinidat.</p>
          <p className='text-1xl'>As Hardware Integration Engineer.</p>
        </div>
      </div>
    </Box>
  )
}
