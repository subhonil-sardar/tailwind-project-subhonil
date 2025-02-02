import React from 'react'

const Contant = () => {
  return (
  <>
    <div className='text-white p-5 gap-4 flex flex-col md:hidden' style={{
      width:'100%', height:'270px', background:'linear-gradient(97.73deg, #399fd8 -6.96%, #0776b4 23.5%, #003756 92.79%)'
    }}>
      <div className='flex justify-between'>
        <div>
         <div className="flex items-baseline">
         <h2 className='text-4xl font-bold flex'>25</h2>
          <h2 className='text-xl font-medium ml-1'>Years</h2>
         </div>
         <h3 className='text-2xl font-semibold -mt-3'>Operated</h3></div>
        <div className='text-2xl font-bold'>Logo</div>
      </div>
      <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis adipisci fugiat dolor tempora necessitatibus voluptates!</p>
      <div className="flex justify-evenly pb-10">
        <div>
          <h3 className='font-bold text-2xl'>
            300+
          </h3>
          <p>Happy <br /> Client</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>
            900+
          </h3>
          <p>Amazing <br /> Project</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl'>
            20+
          </h3>
          <p>Amazing <br /> Award</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contant