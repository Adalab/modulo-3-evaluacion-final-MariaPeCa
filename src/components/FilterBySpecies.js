function FilterBySpecies({searchBySpecies, handleFilter, species}) {
    const uniqueSpecies = Array.from(new Set(species));

    const handleChangeSearchSpecies = (ev) => {
        //setSearchBySpecies(ev.target.value);
        handleFilter('species', ev.target.value);
      };
      
      const renderSpeciesOptions = () => {
        return uniqueSpecies.map((eachSpecies, index) => (<option key={index} value={eachSpecies}>{eachSpecies}</option> ));
      }

    return (
        <label className='filter__form--label' htmlFor='search__species'>
            Species
            <select
                className='form__input-text'
                name='search_species'
                id='search_species'
                value={searchBySpecies}
                onChange={handleChangeSearchSpecies}
            >
                <option value='ALL' className="speciesFilter--all">
                    Choose all species
                </option>
               {renderSpeciesOptions()}
            </select>
        </label>
    );
}
export default FilterBySpecies;