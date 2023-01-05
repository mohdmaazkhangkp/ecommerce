import React, { useState } from 'react'
import { createContext } from 'react';
export const Prod = createContext();
const ProductContextProvider = (props) => {
    const [prod, setProd] = useState();
  return (
    
    <Prod.Provider value={{prod, setProd}}>{props.children}</Prod.Provider>
  )
}

export default ProductContextProvider