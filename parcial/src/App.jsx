import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeApellido = (e) => setApellido(e.target.value);
  const onChangePelicula = (e) => setPelicula(e.target.value);

  const espacioEnBlanco = (texto) => {
    let regex = /^\S/;
    return regex.test(texto);
  };

  const isValidNombre = (nombre) => {
    const valid = nombre.trim().length > 2 ? true : false;
    return valid;
  };
  const isValidPelicula = (pelicula) => {
    const valid = pelicula.trim().length > 5 ? true : false;
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidNombre(nombre) &&
      espacioEnBlanco(nombre) &&
      isValidPelicula(pelicula)
    ) {
      setMostrarCard(true);
      setMensaje(false);
    } else {
      setMostrarCard(false);
      setMensaje(true);
    }
  };
  return (
    <>
      <h2>Escribe tu Nombre y Película</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre: </label>
        <input type="text" value={nombre} onChange={onChangeNombre}></input>
        <br />
        <label htmlFor="">Apellido: </label>
        <input type="text" value={apellido} onChange={onChangeApellido}></input>
        <br />
        <label htmlFor=""> Película: </label>
        <input type="text" value={pelicula} onChange={onChangePelicula}></input>
        <br />
        <br />
        <button type="submit">Enviar</button>
        <div />
        <br />
      </form>
      {mensaje && (
        <p style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
      {mostrarCard && (
        <Card nombre={nombre} apellido={apellido} pelicula={pelicula} />
      )}
    </>
  );
}

export default App;
