//seccion import

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import ls from '../services/localStorage';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';

/*  COMPONENTE */
function App() {

  const [characterList, setCharacterList] = useState(ls.get('characters', []));
  const [searchByName, setSearchByName] = useState('');
  const [searchByStatus, setSearchByStatus] = useState('ALL');
  const [searchBySpecies, setSearchBySpecies] = useState('ALL');


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
    else if (varName === 'status') {
      setSearchByStatus(varValue)
    }
    else if (varName === 'species') {
      setSearchBySpecies(varValue)
    }
  };




  const filteredCharacter = characterList
    .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase()))

    .filter((eachCharacter) => {
      if (searchByStatus === 'ALL') {
        return true;
      } else {
        return eachCharacter.status === searchByStatus;
      }
    })

    .filter((eachCharacter) => {
      if (searchBySpecies === 'ALL') {
        return true;
      } else {
        return eachCharacter.species === searchBySpecies;
      }
    });


  const statuses = characterList.map((eachCharacter) => eachCharacter.status);
  const species = characterList.map((eachCharacter) => eachCharacter.species);


  // OBTERNER INFO DEL PERSONAJE

  const { pathname } = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);


  const characterId = routeData?.params.characterId;
  

  const characterData = characterList.find((character) => character.id === parseInt(characterId));
  



  return (
    <div className='container'>
      <header className='header'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png"
          alt="Rick and Morty"
          className='title_img'
        />
      </header>
      <main className="main">
        <Routes>
          <Route path="/"
            element={<>
              <Filters
                searchByName={searchByName}
                searchByStatus={searchByStatus}
                searchBySpecies={searchBySpecies}
                handleFilter={handleFilter}
                statuses={statuses}
                species={species}
              />
              <div className='list'>
                <CharacterList
                  characterList={filteredCharacter}
                />
              </div>
            </>} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetail
              characterData={characterData} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
