import { useContext } from "react";
import PersonContext from "./PersonContext";

export default function Example3() {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
