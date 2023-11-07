import React from "react";

const Button = ({ styles, buttonText }) => {
    

  
  return (
    <>
      <button type="button"  className={`py-[1vw] px-[2vw] font-poppins font-medium text-[1.5vw] text-primary bg-blue-gradient rounded-[1.5vw] outline-none ${styles}`}>
        {buttonText}
      </button>
    </>
  );

}

export default Button;
