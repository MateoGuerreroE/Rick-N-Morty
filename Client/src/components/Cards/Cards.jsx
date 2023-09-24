import Card from "../Card/Card";
import styledCards from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styledCards.container}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
