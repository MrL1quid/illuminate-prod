import React from 'react'
import { createContext, useState, useContext } from "react";

export const MobileNavContext = createContext();

const ContextHolder = ({ children }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <div>
      <MobileNavContext.Provider value={{ mobileNavActive, setMobileNavActive }}>
        {children}
      </MobileNavContext.Provider>
    </div>
  )
}

export const useMobileContext = () => (useContext(MobileNavContext))
export default ContextHolder