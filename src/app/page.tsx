import Box from '@/components/Box/Box'

export default function Home() {
  return (
    <Box title='Welcome to Stasg-Utils application.'>
      <div className='flex flex-col md:flex-row justify-center items-center min-h-[70vh]'>
        <video
          src='/videos/SG.MP4'
          width={250}
          height={400}
          className='md:w-[300px] md:h-[300px] rounded-full'
          autoPlay
          muted
          loop
        />
        <div className='py-10 px-2 md:px-8 text-center'>
          <p className='text-3xl'>I am Stas Gavrilov.</p>
          <p className='text-2xl'>Working at Infinidat.</p>
          <p className='text-1xl'>As Hardware Integration Engineer.</p>
        </div>
      </div>
    </Box>
  )
}
