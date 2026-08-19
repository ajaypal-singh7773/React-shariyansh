import React from "react";

const card = (props) => {
  return (
    <div className="mb-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-lg font-semibold text-blue-600">{props.name}</h3>
      <p className="text-sm text-slate-600">{props.sex}</p>
      <p className="text-sm text-slate-600">{props.age}</p>
    </div>
  );
};

export default card;
