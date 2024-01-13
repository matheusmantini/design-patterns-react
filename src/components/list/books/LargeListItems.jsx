export const LargeListBook = ({ book }) => {
  const { name, price, pages, title } = book;
  return (
    <>
      <h2>{name}</h2>
      <p>Price: R${price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p>Pages: {pages}</p>
    </>
  );
};
