//seccion import

//.- de React, de archivos propios, Sass, Images
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';


/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [searchByName, setSearchByName] = useState('');
  //const [searchByStatus, setSearchByStatus] = useState('ALL');


  useEffect(() => {
    if (ls.get('characters', null) === null) {
      getDataFromApi()
        .then((cleanData) => {
          setCharacterList(cleanData);

          ls.set('characters', cleanData);
        });
    }
  }, []);

  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    }
    //si tengo más filtros los voy poniendo por aquí con else if/ else
  }

  /*
  const handleChangeSearchStatus = (ev) => {
    setSearchByStatus(ev.target.value);
  }
  */

  const filteredCharacter = characterList
    .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))
  /*
   .filter((eachCharacter) => {
     if(searchByStatus === 'ALL') {
       return true;
     }else {
       return eachCharacter.status === searchByStatus;
     }
   })
   */

  //const statuses = ["alive", "dead", "unknown"];
  //const statuses = characterList.map((eachCharacter) => eachCharacter.status);
  /*
  const renderStatusOptions = () => {
    return statuses.map((eachStatus) => <option key={eachStatus} value={eachStatus}>{eachStatus}</option> );
  }
  */
  // OBTERNER INFO DEL PERSONAJE

  const {pathname} = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);
  console.log(routeData);

  const characterId= routeData?.params.characterId;
  console.log(characterId);

  const characterData = characterList.find((character) => character.id === parseInt(characterId));
  console.log(characterData)


  /* RETURN --> HTML */
  return (
    <div className='container'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="Rick and Morty" className='title_img' />
      </header>
      <main className="main">
        <Routes>

          <Route path="/" element={ <>
          <Filters searchByName={searchByName} handleFilter={handleFilter} />
          <div className='list'>
            <CharacterList characterList={filteredCharacter}/>
          </div></> 
        }/>

          <Route path="/character/:characterId" element={<CharacterDetail characterData={characterData}/>}/>

        </Routes>



      </main>
      <footer>
        <p className='footer__txt'>Rick and Morty Adalab</p>
      </footer>
    </div>
  );
}


/* export*/
export default App;
