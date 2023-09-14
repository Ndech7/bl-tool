import React from "react";

const Team = ({ name, email, passport_photo, profession }) => {
  return (
    <div className="flex items-center gap-x-6">
      <img className="h-16 w-16 rounded-full" src={passport_photo} alt="none" />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {profession}
        </p>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {email}
        </p>
      </div>
    </div>
  );
};

export default Team;
