import React, { useState } from "react";

    const Teksystems = ({ prop1, prop2 }) => {
      const [isOpen, setOpen] = useState(false);
    
      const collapseListener = () => {
        setOpen((prvState) => !prvState);
      };
    
      return (
        <div>
          <button onClick={collapseListener}>{/* button to collapse */}</button>
          <collable collapse={isOpen}>
            {/* your collapasble component */}
            <h1>{prop1}</h1>
            <h1>{prop2}</h1>
          </collable>
        </div>
      );
    };
    
    export default Teksystems;