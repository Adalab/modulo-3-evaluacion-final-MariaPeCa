import {Link} from 'react-router-dom';

function CharacterItem ({eachCharacter})  {
    //console.log(eachCharacter);
return (
    <>
    <article>
    <Link to={"/character/"+eachCharacter.id}>
    <img className="card__img"  src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`}/>
    <h3 className="card__title">{eachCharacter.name}</h3>
    <p className="card__description">{eachCharacter.species}</p>
    <p>{eachCharacter.origin}</p>
    <p>{eachCharacter.status}</p>
    </Link>
    </article>
    </>
);
}
export default CharacterItem;