const Filter = ({ handleSetFilterQuery, filterQuery }) => {
  return (
    <div>
      Filter shown with :{" "}
      <input onChange={handleSetFilterQuery} value={filterQuery} />
    </div>
  );
};

export default Filter;
