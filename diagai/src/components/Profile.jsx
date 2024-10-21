import React from "react";
import Info from "./Info";

const Profile = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="font-medium text-lg mb-5">Hello Dr George👋🏽</h1>
      <div className="dashboard p-8 lg:pt-16 lg:pb-16 flex flex-col md:flex-row gap-8 justify-center items-center mb-6">
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <h3 className="font-semibold text-4xl">12</h3>
          <p className="text-xl">Symptom Generated</p>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <h3 className="font-semibold text-4xl">9</h3>
          <p className="text-xl">Report Created</p>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <h3 className="font-semibold text-4xl">20%</h3>
          <p className="text-xl">User Score</p>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Profile;
