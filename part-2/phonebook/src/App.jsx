import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: newPerson,
      number: newNumber,
    };

    const inPhonebook = persons.some(
      (contact) => contact.name === newContact.name
    );

    if (inPhonebook) {
      alert(`${newContact.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newContact));
      setNewPerson("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            onChange={(e) => setNewPerson(e.target.value)}
            value={newPerson}
          />
        </div>
        <br />
        <div>
          Number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item, i) => {
        return (
          <p key={i}>
            {item.name} : {item.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
