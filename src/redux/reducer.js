import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

//EL REDUCER TIENE QUE SER SIEMPRE UNA FUNCION PURA
// Q significa? q no tengo q darle la posibilidad de q se equivoque 
// llamando a un servdior q no depende de noostros
// xq este servidor puede q cambie y eso excede de nosotros
// fetch no puede suarse en reducer, lo hago en action
const reducer = (state = initialState, action) => {
switch(action.type) {
    case ADD_FAVORITE:
        return {
            ...state,
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
        }
        case DELETE_FAVORITE:
            return {
                ...state,
               myFavorites: state.myFavorites.filter(
                (element) => element.id !== action.payload)
            }
            case FILTER:
                const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload);
                return {
                    ...state,
                    myFavorites: allCharsFiltered
                }
           
            case ORDER:
                return {
                ...state,
                myFavorites: 
                action.payload === "Ascendente"
                ? state.allCharacters.sort((a, b) => a.id - b.id)
                : state.allCharacters.sort((a, b) => b.id - a.id)
            }

default: 
return {
    ...state
}
}
}

export default reducer;