import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
  REMOVE_FAVORITE,
} from "./actions";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  errors: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        errors: {}
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        errors: {}
      };
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


    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        errors: {},
      }
      
    case "ERROR":
      return {
        ...state,
        errors: action.payload,
      }

    default:
      return { ...state };
  }
};

export default rootReducer;

/*import {
    ADD_FAVORITE,
    CLEAN_DETAIL,
    GET_CHARACTER_DETAIL,
    REMOVE_FAVORITE,
  } from "./actions";

  const initialState = {
    myFavorites: [],
    characterDetail: {},
  };

//EL REDUCER TIENE QUE SER SIEMPRE UNA FUNCION PURA
// Q significa? q no tengo q darle la posibilidad de q se equivoque 
// llamando a un servdior q no depende de noostros
// xq este servidor puede q cambie y eso excede de nosotros
// fetch no puede suarse en reducer, lo hago en action

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case ADD_FAVORITE:
        return {
            ...state,
            myFavorites: payload,
          };
    
          case REMOVE_FAVORITE:
            return {
              ...state,
              myFavorites: payload
            };
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

export default rootReducer;

*/