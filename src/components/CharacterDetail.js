import { Link } from "react-router-dom";
function CharacterDetail ({characterData}) {
    return (
        <div>
            <section>               
               <h2>name: {characterData.name}</h2>
               <p>species: {characterData.species}</p>
               <p>origin: {characterData.origin}</p>
               <p>Episodios: {characterData.episodes}</p>
               <p>status: {characterData.status}</p>
               <Link to="/">Go back</Link>        
            </section>
                <img className="card__img"  src={characterData.image} alt={`Foto de ${characterData.name}`}/>
        </div>      
    );
}
export default CharacterDetail;