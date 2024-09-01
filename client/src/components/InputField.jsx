import React from "react";

const InputField = ({ className='', type, placeholder='', children }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`py-2 px-4 rounded outline outline-gray-200 outline-1 ` + className}
      />
      {children}
    </>
  );
};

export default InputField;
