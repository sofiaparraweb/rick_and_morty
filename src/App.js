import Cards from './components/CARDS/Cards.jsx';
import Nav from './components/NAV/Nav.jsx';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from './components/ABOUT/About.jsx';
import Detail from "./components/DETAIL/Detail.jsx";

function App () {
 const [characters, setCharacters] = useState([]);

const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "3698fc44c52e.628564e7536696b74288";
 
  if (characters.find((char) => char.id === id)) {
    return alert("Personaje repetido");
  };

  fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
     .then((response) => response.json())
     .then((data)=> {
      if (data.name) {
setCharacters((oldChars) => [...oldChars, data]);
//funcion callback q recibe el estado viejo y 
//lo une con lo nuevo, creando el estado nuevo
      } else {
        alert("Persona no vino")
      }
    });
  };
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  // filter no modifica el orginal, si no q te da un array nuevo. 
  //te va a dar una array sin el persona que tenia el id que pase ocmo parametro
  };

  return (
     <div>
        <Nav onSearch={onSearch} />
        <Routes>
<Route 
path="/home" 
element={<Cards characters={characters} onClose={onClose} />}
/>
<Route
path='/about'
element={<About />}
/>
<Route
path='/detail/:detailId'
element={<Detail/>}
/>
        </Routes>
      </div>
  )
};

export default App
