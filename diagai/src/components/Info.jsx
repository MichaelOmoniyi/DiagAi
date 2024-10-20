import React from 'react'
import Button from './Button';

const Info = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center mt-10 lg:mt-14">
      <div className="flex flex-col gap-7 text-lg lg:text-2xl text-center font-semibold justify-center items-center">
        <p className="italic">
          Let’s support you in getting you diagnosis faster
        </p>
        <p className="info">✳️ Add your patient name/info</p>
        <p className="info">⌨️ Type in symptoms found for them</p>
        <p className="info">🦾 Possible Illness are generated</p>
      </div>
      <Button content={"Let's get started"} />
    </div>
  );
}

export default Info