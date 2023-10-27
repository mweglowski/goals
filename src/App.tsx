import './App.css'

function App() {
  return (
    <>
      <div className='border-x-4 w-full max-w-[600px] m-auto'>
        <h1 className='font-bold text-3xl'>GOALS</h1>
        <div>here is form</div>
        <div className='p-4'>
          <div className='border-2 flex justify-between p-2 items-center'>
            <div className='flex flex-col text-left'>
              <div className='text-xl'>TypeScript</div>
              <div>description is hereee</div>
            </div>
            <div className='flex gap-2'>
              <div>Finished</div>
              <div>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
