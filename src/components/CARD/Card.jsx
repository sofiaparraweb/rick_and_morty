import { Link } from "react-router-dom";
import style from "./Card.modules.css";

export default function Card({id, name, species, gender, image, onClose}) {
   //antes habia un "props" dnde esta ese objeto, pero como 
   //yo se que ese props es un objeto con distintas propiedades,
   //directamente escribo esas propiedades
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>
            X
            </button>
         <link to={`./detail/${id}`}>
         <h2>Name: {name} </h2>
         </link>

         <img  src={image} alt="" /> 

         <h2>Species: {species}</h2>
         <h2>Gender: {gender} </h2>
      </div>
   );
};


/*
OTRA OPCION SIN HACER DESTRUCTURING
export default function Card(props) {
   
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender} </h2>
         <img  src={image} alt="" /> 
      </div>
   );
}

*/