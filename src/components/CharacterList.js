import CharacterItem from "./CharacterItem";

function CharacterList({ characterList }) {

    const htmlLi = characterList.map((eachCharacter) => (
        <li key={eachCharacter.id} className="character__list-item">
            <CharacterItem eachCharacter={eachCharacter} />
        </li>
    ));

    return (
        <ul className="character__list">
            {htmlLi}
        </ul>
    );
}
export default CharacterList;