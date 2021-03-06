import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <h3>
        {props.part1} {props.exercises1}
        {props.part2} {props.exercises2}
        {props.part3} {props.exercises3}
      </h3>
      <br></br>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <h2>Total number of exercises are: {props.total}</h2>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const info = "Topics and the number of exercises";

  const part1 = "Fundamentals of React:";
  const exercises1 = 10;

  const part2 = "Using props to pass data:";
  const exercises2 = 7;

  const part3 = "State of a component:";
  const exercises3 = 14;

  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <h3>{info}</h3>
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total total={total} />
    </div>
  );
};

export default App;
