/* eslint-disable react/prop-types */
function Parag(props) {
  const { children, className, variant } = props;

  let paragStyle = "";
  switch (variant) {
    case "subTitile":
      paragStyle += "text-sm";
      break;
    default:
      paragStyle += "";
      break;
  }

  return <p className={`${paragStyle} ${className}`}>{children}</p>;
}

export default Parag;
