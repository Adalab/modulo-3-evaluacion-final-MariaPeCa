
function FilterByStatus({ searchByStatus, handleFilter, statuses }) {
  const handleChangeSearchStatus = (ev) => {
    //setSearchByStatus(ev.target.value);
    handleFilter('status', ev.target.value);
  }
  
  const renderStatusOptions = () => {
    return statuses.map((eachStatus, index) => <option key={index} value={eachStatus}>{eachStatus}</option>);
  }
  
  return (
    <label className='filter__form--label' htmlFor="search__status">
      Choose a status
      <select
        className='form__input-text'
        name="search__status"
        id="search_status"
        value={searchByStatus}
        onChange={handleChangeSearchStatus}
      >
        <option value="ALL">Choose all status</option>
        {renderStatusOptions()}
        <option value="alive" className="search__status-alive">Alive</option>
        <option value="dead" className="search__status-dead">Dead</option>
        <option value="unknown" className="search__status-unknown">Unknown</option>

      </select>
    </label>
  );
}
export default FilterByStatus;
