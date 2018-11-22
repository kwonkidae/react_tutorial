import React from 'react';

const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

export default NumberList;
