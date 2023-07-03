function FilterBySpecies({searchBySpecies, handleFilter, species}) {
    const handleChangeSearchSpecies = (ev) => {
        //setSearchBySpecies(ev.target.value);
        handleFilter('species', ev.target.value);
      };
      
      const renderSpeciesOptions = () => {
        return species.map((eachSpecies, index) => <option key={index} value={eachSpecies}>{eachSpecies}</option> );
      }

    return (
        <label className='filter__form--label' htmlFor='search__species'>
            Choose one species
            <select
                className='speciesFilter--box'
                name='search_species'
                id='search_species'
                value={searchBySpecies}
                onChange={handleChangeSearchSpecies}
            >
                <option value='ALL' className="speciesFilter--all">
                    Choose them all
                </option>
               {renderSpeciesOptions()}
                <option value='human' className="speciesFilter--human">Human</option>
                <option value='alien' className="speciesFilter--alien">Alien</option>
            </select>
        </label>
    );
}
export default FilterBySpecies;