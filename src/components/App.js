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
  const [searchByName, setSearchByName] = useState('');
  const [searchByStatus, setSearchByStatus] = useState('ALL');

  
    useEffect(() => {
      if(ls.get('characters', null) === null) {
      getDataFromApi()
        .then((cleanData) => {
          setCharacterList(cleanData);

          ls.set('characters', cleanData);
        });
      }
    }, []);

    const handleChangeSearchName = (ev) => {
      setSearchByName(ev.target.value);
    }

    const handleChangeSearchStatus = (ev) => {
      setSearchByStatus(ev.target.value);
    }

    const  filteredCharacter = characterList
    .filter((eachCharacter) => eachCharacter.);


    /* RETURN --> HTML */
    return (
      <div className='container'>
        <header className='header'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="" className='title_img' />
        </header>
        <main className="main">
          <form className="filters">
            <label className="filter__form--label" htmlFor="search_name">Name
              <input
                className="form__input-text"
                type="text"
                placeholder="Who are you searching for?"
                name="search_name"
                id="search_name"
                value={searchByName}
                onChange={handleChangeSearchName}
                />
            </label>
            <label className='filter__form--label' htmlFor="search_status">Status
              <select className='form__input-text' name="search_status" id="search_status" value={searchByStatus} onChange={handleChangeSearchStatus}>
                <option selected disabled value="ALL">Select the status of the character</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </label>
          </form>
          <div className='list'>
          <CharacterList characterList={filteredCharacter}/>
          </div>
        </main>
      </div>
    );
  }


/* export*/
export default App;
