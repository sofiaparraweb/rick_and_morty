import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, GET_CHARACTER_DETAIL, GET_FAVORITES} from "../action-types.js"
import axios from "axios";

export const addFavorite = (character) => {
  return async function (dispatch) {
    try { 
    const response = await axios.post ("http://localhost:3001/rickandmorty/fav", character)
  return dispatch({
    type: ADD_FAVORITE,
      payload: response.data,
  })
  } catch(error) {
return dispatch({ type: "ERROR", payload: error})
  }}
}

export const removeFavorite = (id) => {
return async function (dispatch) {
  try { 
  const response = await axios.delete (`http://localhost:3001/rickandmorty/fav/${id}`, character)
return dispatch({
  type: REMOVE_FAVORITE,
    payload: response.data,
})
} catch(error) {
return dispatch({ type: "ERROR", payload: error})
}}
}

export const getFavorites = () => {
  return async function (dispatch) {
    try { 
    const response = await axios.get (`http://localhost:3001/rickandmorty/fav`, character)
  return dispatch({
    type: GET_FAVORITES,
      payload: response.data,
  })
  } catch(error) {
  return dispatch({ type: "ERROR", payload: error})
  }}
}

export const filterCards = (gender) => {
  return {
   type: FILTER,
   payload: gender
  }
}

export const orderCards = (id) => {
 return {
  type: ORDER,
  payload: id
 }
}
