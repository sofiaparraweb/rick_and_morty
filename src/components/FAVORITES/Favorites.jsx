
//traer favoritos

import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.css";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../CARD/Card";

const Favorites = () => {
const { myFavorites } = useSelector(state => state);
const dispatch = useDispatch()

const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
}

const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
}

    return (
        <>
        <div>
        <select onChange={handlerOrder}>
            <option value="filter" disabled="disabled">Order By</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
         </select>
         <select onChange={handlerFilter}>
            <option value="filter" disabled="disabled">Filter By</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option> 
            <option value="Unknown">Unknown</option>
            <option value="Genderless">Genderless</option> 
        </select>
        </div>
        {
         myFavorites.map(({ id, name, species, gender, image, onClose }) => {
            return <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
             />;
         })
        }
        </>
    )
};

export default Favorites;