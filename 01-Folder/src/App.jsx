import React from "react";
import Card from "./componants/Card/card";

const App = () => {
  const people = [
    {
      name: "Ajay",
      age: 20,
      sex: "Male",
    },
    {
      name: "Priya",
      age: 22,
      sex: "Female",
    },
    {
      name: "Rahul",
      age: 19,
      sex: "Male",
    },
    {
      name: "Sneha",
      age: 21,
      sex: "Female",
    },
    {
      name: "Aman",
      age: 23,
      sex: "Male",
    },
  ];
  return (
    <div>
      {people.map(function (elem) {
        return (
          <Card
            key={elem.name}
            name={elem.name}
            age={elem.age}
            sex={elem.sex}
          />
        );
      })}
    </div>
  );
};

export default App;
