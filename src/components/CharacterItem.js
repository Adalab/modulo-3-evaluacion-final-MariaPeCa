function CharacterItem ({eachCharacter})  {
    //console.log(eachCharacter);
return (
    <>
    <article>
    <img className="card__img"  src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`}/>
    <h3 className="card__title">{eachCharacter.name}</h3>
    <p className="card__description">{eachCharacter.species}</p>
    <p className="card__origin">{eachCharacter.origin.name}</p> 
    </article>
    </>
);
}
export default CharacterItem;