import { DELETE_FAVORITE, ADD_FAVORITE } from "./action-type";

 export const addFavorite = (character) => {
    return { 
      type: ADD_FAVORITE,
      payload: character
   }
 }

 export const deleteFavorite = (id) => {
   return { 
     type: DELETE_FAVORITE,
     payload: id
  }
}