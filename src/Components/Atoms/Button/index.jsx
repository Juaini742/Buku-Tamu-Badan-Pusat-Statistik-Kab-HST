/* eslint-disable react/prop-types */
function Button(props) {
  const { variant, type, onClick, className, children } = props;
  let btnStye = "";
  switch (variant) {
    case "primary":
      btnStye +=
        "trans-300 bg-primary rounded-md text-white hover:bg-secondary";
      break;
    case "outline":
      btnStye +=
        "trans-300 ring-offset-2 ring-2 ring-primary bg-primary/30 rounded-md hover:bg-secondary hover:text-white";
      break;
    case "warning":
      btnStye += "trans-300 bg-warning rounded-md text-white hover:bg-warningH";
      break;
    case "danger":
      btnStye += "trans-300 bg-danger rounded-md text-white hover:bg-dangerH";
      break;
    default:
      btnStye += "";
      break;
  }
  return (
    <button type={type} onClick={onClick} className={`${btnStye} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
