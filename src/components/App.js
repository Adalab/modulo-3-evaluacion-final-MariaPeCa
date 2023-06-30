//seccion import

//.- de React, de archivos propios, Sass, Images
import '../styles/App.scss';

/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  /* RETURN --> HTML */
  return (
    <div className='container'>
      <header className='cont_header'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="" className='title_img'/>
      </header>
      <div className="search-container">
        <input clasName="input-container"
        type="text" id="search-input" placeholder="Buscar aquí lo que necesites"/>
    </div>
    <div>
      <ul>
        <li>Personaje1</li>
        <li>Personaje2</li>
        <li>Personaje3</li>
      </ul>
    </div>
    </div>
  )
}

/* export*/
export default App;
