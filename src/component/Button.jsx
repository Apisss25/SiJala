import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Simplified Button Component
 * Props:
 * - children: button label
 * - onClick: click handler
 * - icon: FontAwesome icon (optional)
 */
export default function Button({ children, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 bg-green-400 hover:bg-green-600 text-white rounded-xl hover:scale-[1.05] focus:outline-none transition-all duration-300 ease-in-out" 
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {children}
    </button>
  );
}
