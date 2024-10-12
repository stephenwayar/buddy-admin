import React from "react";

type BurgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

const Burger: React.FC<BurgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-between w-8 h-6 group"
    >
      <span
        className={`block h-[3px] rounded-full bg-[#3B3B45] transition-all duration-300 ease-in-out transform ${isOpen ? "rotate-45 translate-y-[8px] w-[120%]" : "rotate-0 w-full"
          }`}
      />

      <span
        className={`block h-[3px] rounded-full w-full bg-[#3B3B45] transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
          }`}
      />

      <span
        className={`block h-[3px] rounded-full bg-[#3B3B45] transition-all duration-300 ease-in-out transform ${isOpen ? "-rotate-45 -translate-y-[8px] w-[120%]" : "rotate-0 w-full"
          }`}
      />
    </button>

  );
};

export default Burger;