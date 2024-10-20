import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 h-full flex flex-col justify-between pt-16 pb-16 pr-7 pl-7 sidebar">
      <div>
        <h1 className="font-bold text-3xl mb-16">DiagAI 👩‍⚕️</h1>
        <div className="flex flex-col gap-4 links font-medium">
          <a href="/#">Home</a>
          <a href="/#">Reports</a>
          <a href="/#">Docs</a>
        </div>
      </div>
      <div>
        <a href="/#" className='font-medium text-red-600'>Logout</a>
      </div>
    </div>
  );
}

export default Sidebar