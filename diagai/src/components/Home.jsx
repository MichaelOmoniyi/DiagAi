import React from 'react'
import Button from './button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-16 lg:mb-32">Welcome Doc 👩‍⚕️</h1>
      <div className="w-full text-center">
        <Button content={"Create Account"} />
        <p className="text-base font-normal mt-4">
          Already have an account? <span className="signin">Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default Home