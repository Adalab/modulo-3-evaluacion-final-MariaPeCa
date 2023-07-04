import { Link } from 'react-router-dom';

function CharacterItem({ eachCharacter }) {
    return (
        <div className="card__box">
            <Link to={"/character/" + eachCharacter.id}>
                <img className="card__img" src={eachCharacter.image} alt={`Foto de ${eachCharacter.name}`} />
                <h3 className="card__title">{eachCharacter.name}</h3>
                <p className="card__description">{eachCharacter.species}</p>
            </Link>
        </div>
    );
}
export default CharacterItem;