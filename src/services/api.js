const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
   
      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          image: objectAPI.image,
          name: objectAPI.name,
          species: objectAPI.species,
          origin: objectAPI.origin.name,
          status: objectAPI.status,
          episodes: objectAPI.episode.length
        }
      });
      cleanData.sort((a, b) => a.name.localeCompare(b.name));
      return cleanData;
    })

};

export default getDataFromApi;