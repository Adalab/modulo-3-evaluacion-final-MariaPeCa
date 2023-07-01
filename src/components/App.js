//seccion import

//.- de React, de archivos propios, Sass, Images
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';

/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  const [characterList, setCharacterList] = useState(ls.get('characters', []));

  
    useEffect(() => {
      if(ls.get('characters', null) === null) {
      getDataFromApi()
        .then((cleanData) => {
          setCharacterList(cleanData);

          ls.set('characters', cleanData);
        });
      }
    }, []);


    /* RETURN --> HTML */
    return (
      <div className='container'>
        <header className='header'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="" className='title_img' />
        </header>
        <main className="main">
          <form className="filters">
            <label className="filter__form--label" htmlFor="search_name">
              <input
                className="form__input-text"
                type="text"
                placeholder="Escribe el nombre de tu personaje"
                name="search_name"
                id="search_name"
                />
            </label>
          </form>
          <div className='list'>
          <CharacterList characterList={characterList}/>
          </div>
        </main>
      </div>
    );
  }


/* export*/
export default App;
