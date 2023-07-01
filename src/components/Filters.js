import FilterByName from './FilterByName'

function Filters({ searchByName, handleFilter }) {

    return (
        <form className="filters">
           <FilterByName searchByName={searchByName} handleFilter={handleFilter}/>
            {/*
            <label className='filter__form--label' htmlFor="search_status">Status
              <select className='form__input-text' name="search_status" id="search_status" value={searchByStatus} onChange={handleChangeSearchStatus}>

                <option value="ALL">Select all status</option>
                
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              
              </select>
            </label>
            */}
        </form>
    );
}
export default Filters;