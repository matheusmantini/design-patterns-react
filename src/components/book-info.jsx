import { useResource } from "./resource.hook";

export const BookInfo = ({bookId}) => {
  const book = useResource(`http://localhost:9090/books/${bookId}`);
  const { name, price, title, pages } = book || {};
  return book ? (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
