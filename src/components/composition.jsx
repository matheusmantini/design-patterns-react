export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      {...props}
      style={{ fontSize: size === "small" ? "8px" : "32px", background: color }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button {...props} color="crimson" />;
};

export const GreenSmallButton = (props) => {
  return <Button {...props} color="green" size="small" />;
};
