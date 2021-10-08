import React, { useState } from 'react';
const PersonCard = (props) => {

  const { firstName, lastName, age, hairColor } = props;

  const [personAge, setPersonAge] = useState({
    age: age
  })

  const birthday = (e) => {
    setPersonAge({
      age: personAge.age + 1
    })
  }
  return (
    <div className="Person">
      <h1>{lastName}, {firstName}</h1>
      <h3>Age: {personAge.age}</h3>
      <h3>Hair Color: {hairColor}</h3>
      <button className="btn btn-dark btn-outline-light" onClick={birthday}>Happy B-Day {firstName}!!!</button>
    </div>
  );
}
export default PersonCard;