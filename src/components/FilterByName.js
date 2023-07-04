function FilterByName({searchByName, handleFilter}) {

    
    const handleChangeSearchName = (ev) => {
        ev.preventDefault();
        handleFilter('name', ev.target.value);

    }
    
    const characterNotFound = false;
    
    return (
       
        <label className="filter__form--label" htmlFor="search_name">Name   
            <input
                className="form__input-text"
                type="text"
                placeholder=" What character are you looking for?"
                name="search_name"
                id="search_name"
                value={searchByName}
                onChange={handleChangeSearchName}
               
            />
            {searchByName && characterNotFound && (
            <p className="error__name">
              Sorry, but {''}
              <span className="error__msg">{searchByName}</span> does not match any character.
            </p>
          )}
        </label>
      
    );
}
export default FilterByName;