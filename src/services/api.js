const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character?page=1')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
   
      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          image: objectAPI.image,
          name: objectAPI.name,
          species: objectAPI.name
        }
      });
      console.log(cleanData);
      return cleanData;
    })

};

export default getDataFromApi