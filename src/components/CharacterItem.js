function CharacterItem ({eachCharacter})  {
    console.log(eachCharacter);
return (
    <>
    <img src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`}/>
    <h3>{eachCharacter.name}</h3>
    <p>{eachCharacter.species}</p> 
    </>
);
}
export default CharacterItem;