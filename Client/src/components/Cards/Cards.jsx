import Card from "../Card/Card";
import styledCards from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styledCards.container}>
      {characters.length ? (
        <button
          onClick={() => props.setCharacters([])}
          className={styledCards.remove}
        ></button>
      ) : null}
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          status={character.status}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
