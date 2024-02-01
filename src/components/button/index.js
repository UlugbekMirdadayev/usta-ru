import React from "react";

const Button = ({ type, title, children }) => {
  return <button className={`btn btn-${type}`}>{children}</button>;
};

export default Button;
