import { Link } from "react-router-dom";
import style from "./Card.modules.css"
import { connect } from "react-redux";
import { Dispatch, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect } from "react";

function Card({
   id,
   name,
   species, 
   gender, 
   image, 
   onClose,
   addFavorite,
   deleteFavorite, 
   myFavorites
}) {
   //antes habia un "props" dnde esta ese objeto, pero como 
   //yo se que ese props es un objeto con distintas propiedades,
   //directamente escribo esas propiedades

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({
            id,
            name,
            species, 
            gender, 
            image, 
            onClose,
            addFavorite,
            deleteFavorite,
            myFavorites
         })
      }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);

   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
         <button onClick={() => onClose(id)} className={style.closeButton}>
            X
            </button>
         <Link to={`/detail/${id}`}>
         <h2> {name} </h2>
         </Link>

         <img src={image} alt="" /> 

         <h2>Species: {species}</h2>
         <h2>Gender: {gender} </h2>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   };

};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
//pongo null xq no necesito el mapState