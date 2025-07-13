const PersonForm = ({
  handleSetNewNumber,
  handleSubmit,
  newPerson,
  newNumber,
  handleSetNewPerson,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleSetNewPerson} value={newPerson} />
      </div>
      <br />
      <div>
        Number: <input value={newNumber} onChange={handleSetNewNumber} />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
