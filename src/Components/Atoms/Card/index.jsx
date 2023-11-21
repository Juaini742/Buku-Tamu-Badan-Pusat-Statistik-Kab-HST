/* eslint-disable react/prop-types */
function Card(props) {
  const { className, children } = props;
  const cardStyle = "px-2 py-5 rounded-lg  bg-slate-200 shadow-lg";
  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default Card;
