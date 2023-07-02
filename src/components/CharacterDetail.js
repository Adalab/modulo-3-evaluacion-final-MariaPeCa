import { Link } from "react-router-dom";
function CharacterDetail ({characterData}) {
    if (characterData) {
    return (
        <form>
            <section>               
               <h2>Name: {characterData.name}</h2>
               <p>Species: {characterData.species}</p>
               <p>Planet of origin: {characterData.origin}</p>
               <p>Episodes: {characterData.episodes}</p>
               <p>Status: {characterData.status}</p>
               <Link to="/">Go back</Link>        
            </section>
                <img className="card__img"  src={characterData.image} alt={`Foto de ${characterData.name}`}/>
        </form>      
    );
} else {
    return (
        <div className="error__msg">
            <p>“Sorry, we coudn´t find the character you were looking for but let me tell you that 
            <br />
            'This place is a real Who’s Who of who’s you and me.'”</p>
            <Link to="/">Go back</Link> 
        </div>
    )
}
}
export default CharacterDetail;