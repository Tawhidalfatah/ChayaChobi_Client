const Button = ({ label, disabled, onclick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className="btn btn-outline btn-primary text-xl"
    >
      {label}
    </button>
  );
};

export default Button;
