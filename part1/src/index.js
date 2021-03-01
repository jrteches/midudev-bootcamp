import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
} 

const Part1 = (props) => {
  return <p>{props.part1}</p>
}

const Part2 = (props) => {
  return <p>{props.part2}</p>
}

const Part3 = (props) => {
  return <p>{props.part3}</p>
}

const Total = (props) => {
  return <p>number of exercises {props.exercises1} + {props.exercises2} + {props.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part1 part1={part1} />
      <Part2 part2={part2} />
      <Part3 part3={part3} />
      <Total Total={Total} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
