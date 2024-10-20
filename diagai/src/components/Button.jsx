import React from 'react'

const Button = ({content}) => {
  return (
    <button type='submit' className="w-full lg:text-3xl flex items-center justify-center pt-4 pb-4 lg:pt-5 lg:pb-5 font-medium btn">
      {content}
    </button>
  );
}

export default Button