import FilterByName from './FilterByName'
import FilterByStatus from './FilterByStatus';
import FilterBySpecies from './FilterBySpecies';

function Filters({ searchByName, searchByStatus, searchBySpecies, handleFilter, statuses, species }) {

  

  return (
    <form className="filters">
      <FilterByName 
      searchByName={searchByName} 
      searchBySpecies={searchBySpecies} 
      handleFilter={handleFilter} 
      />

      <FilterByStatus 
      searchByStatus={searchByStatus}
      handleFilter={handleFilter} 
      statuses= {statuses}
      />
     
      <FilterBySpecies
      searchBySpecies={searchBySpecies}
      handleFilter={handleFilter}
      species={species}
      />   
    </form>
  );
}
export default Filters;