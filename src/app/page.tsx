import Box from '@/components/Box/Box'

export default function Home() {
  return (
    <Box title='Welcome to Stasg-Utils application.'>
      <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen p-2 lg:p-4'>
        <video
          src='/videos/SG.MP4'
          width={250}
          height={400}
          className='lg:w-[400px] lg:h-[550px] rounded-[1rem]'
          autoPlay
          muted
          loop
        />
        <div className='py-10 px-2 lg:px-24 text-center'>
          <p className='text-3xl'>I am Stas Gavrilov.</p>
          <p className='text-2xl'>Working at Infinidat.</p>
          <p className='text-1xl'>As Hardware Integration Engineer.</p>
        </div>
      </div>
    </Box>
  )
}
