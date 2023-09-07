import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
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
