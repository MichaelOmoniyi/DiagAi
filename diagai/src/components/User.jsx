import React from 'react'
import Button from './Button';

const User = () => {
  return (
    <div>
      <p className="text-base text-gray-700 mt-4 mb-4">ID: Patient 001</p>
      <form>
        <div className="w-full row flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 mb-8">
          <div className="col w-full">
            <label htmlFor="age" className="text-gray-700">
              Patient Age:
            </label>
            <input type="text" name="age" id="age" />
          </div>
          <div className="col w-full">
            <label htmlFor="illness" className="text-gray-700">
              Illness:
            </label>
            <input type="text" name="illness" id="illness" />
          </div>
        </div>
        <div className="row">
          <textarea
            name="symptoms"
            id="symptoms"
            placeholder="Start typing your symptoms, seperate the comma.........."
            autoComplete="on"
            className="h-56"
          ></textarea>
        </div>
        <div className="flex justify-center mt-4">
          <Button content={"Submit Symptoms"} />
        </div>
      </form>
    </div>
  );
}

export default User