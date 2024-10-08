import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => person.profession === "chemist");
  const otherScientists = people.filter(person => person.profession !== "chemist");

  const chemistsListItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const otherScientistsListItems = otherScientists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemistsListItems}</ul>
      <h2>Other Scientists</h2>
      <ul>{otherScientistsListItems}</ul>
    </article>
  );
}
