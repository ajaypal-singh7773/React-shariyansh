import React from "react";
import Card from "./componants/card";
const App = () => {
  const arr = [
    {
      name: "ramsingh",
      sex: "male",
      age: 22,
    },
    { name: "Ajay", age: 20, sex: "Male" },
  ];
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {arr.map(function (elem) {
        return (
          <Card
            key={elem.name}
            name={elem.name}
            age={elem.age}
            sex={elem.sex}
          />
          
        );
      })}
       <p className="text-blue">This is a simple card.</p>
    </div>
  );
};

export default App;
