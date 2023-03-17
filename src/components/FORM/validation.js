const validation = (userData) => {
let errors = {};

if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(userData.username)) {
    errors.username = "El email es invalido";
}
if(!userData.username) {
    errors.username = "Este campo no puede estar vacio";
}
if(userData.username.length > 35) {
    errors.username = "El email no puede superar los 35 caracteres"
}
if(userData.password.includes(numero )){
    errors.password = "La constraseñ debe contener al menos un número"
}
if(userData.password.length < 6 && userData.password.length > 10)
{
    errors.password = "La constraseñ debe contener entre 6 y 10 caracteres"
}
return errors;
}


export default const