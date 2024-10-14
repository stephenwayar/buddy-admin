import React from "react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <React.Fragment>
      <div 
        onClick={onClose} 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[140] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
      />

      <div className={`fixed top-0 left-0 h-full w-[14rem] bg-white z-[150] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Drawer;