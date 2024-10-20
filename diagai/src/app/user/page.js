import React from 'react'
import Header from '@/components/Header'
import User from '@/components/User'

const page = () => {
  return (
    <div className="p-4 lg:p-10">
      <Header />
      <User />
    </div>
  );
}

export default page