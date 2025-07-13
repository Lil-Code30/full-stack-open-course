import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

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

  const FilteredContacts = persons.filter((contact) =>
    contact.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const result = filterQuery ? FilteredContacts : persons;
  const handleSetNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSetFilterQuery = (e) => {
    setFilterQuery(e.target.value);
  };
  const handleSetNewPerson = (e) => {
    setNewPerson(e.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterQuery={filterQuery}
        handleSetFilterQuery={handleSetFilterQuery}
      />
      <br />
      <h2>Add a New Contact</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newPerson={newPerson}
        handleSetNewNumber={handleSetNewNumber}
        newNumber={newNumber}
        handleSetNewPerson={handleSetNewPerson}
      />

      <h2>Numbers</h2>
      {result.map((item, i) => {
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
