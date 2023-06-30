//seccion import

//.- de React, de archivos propios, Sass, Images
import { useEffect, useState } from 'react';
import '../styles/App.scss';

/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  const [characterList, setCharacterList] = useState ([]);

  useEffect (() => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);

      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          image: objectAPI.image,
          name: objectAPI.name,
          species: objectAPI.name
        }
      });
      console.log(cleanData);
      return cleanData;
    })
    .then ((cleanData) => {
      setCharacterList(cleanData);
    });

  }, []);


  /* RETURN --> HTML */
  return (
    <div className='container'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="" className='title_img' />
      </header>
      <main className="main">
        <form className="main__form">
          <label className="main__form--label" htmlFor="name">
            <input
              className="name-input"
              type="text"
              placeholder="Escribe el nombre de tu personaje"
              id="name"
              htmlFor="name"
            ></input>
          </label>
        </form>
        <ul className='character__list'>
          <li></li>
        </ul>
      </main>
    </div>
  );
}


/* export*/
export default App;
