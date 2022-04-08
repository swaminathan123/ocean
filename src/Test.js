import React, { useState } from "react";
function Test() {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
  });

  const [value, setValue] = useState([]);
  const clickHandler = (e) => {
    e.preventDefault();
    // setValue(data);
    value.push(data);
    console.log(value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setData({
              ...data,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setData({
              ...data,
              age: e.target.value,
            });
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setData({
              ...data,
              address: e.target.value,
            });
          }}
        />
        <button onClick={clickHandler}>submit</button>
      </form>
      {value.map((d, i) => {
        const { name, age, address } = d;
        return (
          <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{address}</p>
          </>
        );
      })}
    </>
  );
}
export default Test;
