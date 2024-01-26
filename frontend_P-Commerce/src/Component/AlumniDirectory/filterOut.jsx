
import React from "react";
import { useState,useEffect } from "react";


function Filter() {
  const [query, setQuery] = useState("");
  
   if (error) {
     return <>{error.message}</>;
   } else if (!loaded) {
     return <>loading...</>;
   } else {
     return (
       <div className="wrapper">
         <div className="search-wrapper">
           <label htmlFor="search-form">
             <input
               type="search"
               name="search-form"
               id="search-form"
               className="search-input"
               placeholder="Search for..."
               onChange={(e) => setQuery(e.target.value)}
             />
             <span className="sr-only">Search countries here</span>
           </label>
         </div>
         
         ...
       </div>
     );
   }
 }
 
 export default Filterout;