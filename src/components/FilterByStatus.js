
function FilterByStatus({ searchByStatus, handleFilter, statuses }) {
  const uniqueStatuses = Array.from(new Set(statuses));

  const handleChangeSearchStatus = (ev) => {
    handleFilter('status', ev.target.value);
  }
  
  const renderStatusOptions = () => {
    return uniqueStatuses.map((eachStatus, index) => (<option key={index} value={eachStatus}>{eachStatus}</option>));
  }
  
  return (
    <label className='filter__form--label' htmlFor="search__status">
      Status
      <select
        className='form__input-text'
        name="search_status"
        id="search_status"
        value={searchByStatus}
        onChange={handleChangeSearchStatus}
      >
        <option value="ALL">Choose all statuses</option>
        {renderStatusOptions()}
      </select>
    </label>
  );
}
export default FilterByStatus;
