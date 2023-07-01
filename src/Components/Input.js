import React from "react";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <div className="flex mt-4">
      <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
        {label}
      </span>
      <input
        type={type}
        id={name}
        name={name}
        className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
        value={value}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default Input;