import React from "react";

const Fields = ({name, email,index}) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>remove</h4>
    </div>
  );
};

export default Fields;
