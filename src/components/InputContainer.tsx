// InputContainer.tsx
import React from "react";

interface InputContainerProps {
  type: string;
  title: string;
  placeholder: string;
  icon?: "user" | "email" | "message";
}

const iconPaths = {
  user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  email:
    "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  message: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
};

const InputContainer = ({
  type,
  title,
  placeholder,
  icon = "user",
}: InputContainerProps) => {
  return (
    <div className="relative bg-gray-50 p-5 flex justify-start items-start gap-4 border-2 border-black max-w-full w-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-preserve-3d rotate-x-5 rotate-y-[-5deg] perspective-1000 shadow-[8px_8px_0_0_#000] hover:rotate-x-2 hover:rotate-y-0 hover:scale-[1.01] hover:shadow-[12px_12px_0_-3px_rgba(251,146,60),12px_12px_0_0_#000] group">
      {/* Button */}
      <button className="cursor-pointer border-3 border-black bg-orange-400 transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] flex justify-center items-center p-2.5 transform-[translateZ(20px)] relative z-30 font-bold uppercase hover:bg-orange-400 hover:transform-[translateZ(10px)_translateX(-5px)_translateY(-5px)] hover:shadow-[5px_5px_0_0_#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
          className="w-5 h-5"
        >
          <path d={iconPaths[icon]} />
        </svg>
      </button>

      {/* Input/Textarea */}
      {type === "textarea" ? (
        <textarea
          name={title}
          className="w-full min-h-[150px] outline-none border-2 border-black px-4 py-3 text-lg transform-[translateZ(10px)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-30 font-['Roboto'] tracking-tighter placeholder-gray-600 placeholder:font-bold placeholder:uppercase hover:bg-gray-100 hover:transform-[translateZ(20px)_translateX(-5px)_translateY(-5px)] hover:shadow-[5px_5px_0_0_#000] focus:bg-gray-100 focus:transform-[translateZ(20px)_translateX(-5px)_translateY(-5px)] focus:shadow-[5px_5px_0_0_#000] resize-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={title}
          className="w-full outline-none border-3 border-black px-4 py-3 text-lg bg-white text-black transform-[translateZ(10px)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-30 font-['Roboto'] tracking-tighter placeholder-gray-600 placeholder:font-bold placeholder:uppercase hover:bg-gray-100 hover:transform-[translateZ(20px)_translateX(-5px)_translateY(-5px)] hover:shadow-[5px_5px_0_0_#000] focus:bg-gray-100 focus:transform-[translateZ(20px)_translateX(-5px)_translateY(-5px)] focus:shadow-[5px_5px_0_0_#000]"
          placeholder={placeholder}
        />
      )}

      {/* Label */}
      <div className="absolute top-[-14px] left-4 bg-orange-400 text-black font-bold px-3 py-1 text-xs transform-[translateZ(30px)] z-40 border-2 border-black uppercase tracking-wider">
        {title}
      </div>
    </div>
  );
};

export default InputContainer;
