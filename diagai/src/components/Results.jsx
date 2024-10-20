import React from 'react'
import diagnosis from '@/data/results'

const Results = () => {
  return (
    <div>
      <p className="text-base text-gray-700 mt-4 mb-4">ID: Patient 001</p>
      <div>
        <h1 className="font-bold text-3xl mb-4">Result💊</h1>
        <p className="text-base text-gray-700 mb-8">
          Here are possible illness that your patient might have based on your
          input
        </p>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diagnosis.map((result) => {
                return (
                  <div className="w-full p-7 result" key={result.id}>
                    <div className="flex justify-between mb-7">
                      <h1 className="font-bold text-2xl">{result.diagonis}</h1>
                      <p href="/#" className="text-yellow-300 font-semibold text-2xl">
                        {result.percent}
                      </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                      {result.references.map((reference) => {
                        return <a className='w-full overflow-hidden text-ellipsis underline text-lg lg:text-2xl' key={result.id}>{reference}</a>;
                      })}
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}

export default Results