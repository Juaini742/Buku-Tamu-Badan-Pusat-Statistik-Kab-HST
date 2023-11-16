/* eslint-disable react/prop-types */
function CardBody(props) {
  const { className, children, variant } = props;
  let cardStyle = "";

  switch (variant) {
    case "sm":
      cardStyle += "max-w-sm shadow-lg rounded-md overflow-hidden";
      break;
    default:
      cardStyle += "";
      break;
  }

  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default CardBody;
