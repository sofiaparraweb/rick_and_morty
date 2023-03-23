import Cards from './components/CARDS/Cards.jsx';
import Nav from './components/NAV/Nav.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/ABOUT/About.jsx';
import Detail from "./components/DETAIL/Detail.jsx";
import Favorites from './components/FAVORITES/Favorites.jsx';
import Form from "./components/FORM/Form.jsx";
// import { Form } from 'react-router-dom';

function App () {
 const [characters, setCharacters] = useState([]);
 const { pathname } = useLocation();
 const [access, setAccess] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  !access && navigate("/");
}, [access]);

// ! CREDENCIALES FAKE
const username = "sofiparra44@gmail.com";
const password = "sofipa123";

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
        window.alert("Persona no vino")
      }
    });
  };
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  // filter no modifica el orginal, si no q te da un array nuevo. 
  //te va a dar una array sin el persona que tenia el id que pase ocmo parametro
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };
  
  return (
     <div className='App' style={{ padding: '25px' }}>
 {pathname !== "/" && <Nav onSearch={onSearch} />}
        <Routes>
<Route path="/" element={<Form login={login} />} />
<Route 
path="/home" 
element={<Cards characters={characters} onClose={onClose} />}
/>
<Route
path='/about'
element={<About />}
/>
<Route
path='/favorites'
element={<Favorites />}
/>
<Route
path='/detail/:detailId'
element={<Detail/>}
/>
        </Routes>
      </div>
  )
};

export default App;
