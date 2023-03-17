import style from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar({ onSearch }) {
 const [id, setId] = useState ("");

 const handleChange = (event) => {
   setId(event.target.value)
 };

   return (
      <div className={style.bar}>
      <input 
      type="search" 
      className={style.searchInput} 
      onChange={handleChange}
      //on change es como decir: cada vez q haya un cmabio gaurdalo/avaisame
       />
      <button 
      className={style.searchButton}
      onClick={() => onSearch(id)}
   // FUNCION Q EJECUTA A ONSEARCH. 
   // Si yo pongo onClick={onSearch(id)} la estoy
   //nombranod peor no ejecutando
   > 
         Agregar
         </button> 
      </div>
   ); 
}
