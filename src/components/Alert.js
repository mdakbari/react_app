import React from "react";

function Alert(props) {
  const captital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{captital(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;
