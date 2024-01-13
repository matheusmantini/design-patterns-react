export const LargeListAuthor = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{country}</p>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};
