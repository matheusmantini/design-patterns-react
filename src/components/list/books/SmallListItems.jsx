export const SmallListBook = ({ book }) => {
  const { name, price } = book;
  return (
    <p>
      Name: {name}, Price: {price}
    </p>
  );
};
