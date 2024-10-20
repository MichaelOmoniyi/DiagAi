import React from 'react'
import Header from '@/components/Header';
import Results from '@/components/Results';

const page = () => {
  return (
    <div className="p-4 lg:p-10">
      <Header />
      <Results />
    </div>
  );
}

export default page