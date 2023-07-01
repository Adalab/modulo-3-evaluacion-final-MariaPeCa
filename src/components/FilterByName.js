function FilterByName({searchByName, handleFilter}) {
    const handleChangeSearchName = (ev) => {
        //setSearchByName(ev.target.value);
        handleFilter('name', ev.target.value);
    }
    return (
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
    );
}
export default FilterByName;