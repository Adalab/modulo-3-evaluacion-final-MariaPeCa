import { Link } from "react-router-dom";
function CharacterDetail () {
    return (
        <div>
            <section>
               
               <p>image: objectAPI.image,</p> 
               <h2>name: objectAPI.name,</h2>
               <p>species: objectAPI.species,</p>
               <p>origin: objectAPI.origin.name,</p>
               <p>Episodios</p>
               <p>status: objectAPI.status</p>
               <Link to="/">Back</Link>
        
            </section>
        </div>
           
    );

}
export default CharacterDetail;