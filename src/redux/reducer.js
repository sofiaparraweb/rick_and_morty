import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types"

const initialState = {
    myFavorites: [],
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
            myFavorites: [...state.myFavorites, action.payload]
        }
        case DELETE_FAVORITE:
            return {
                ...state,
               myFavorites: state.myFavorites.filter(
                (element) => element.id !== action.payload)
            }

default: 
return {
    ...state
}
}
}

export default reducer;