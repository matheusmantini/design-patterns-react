export const SmallListAuthor = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};
