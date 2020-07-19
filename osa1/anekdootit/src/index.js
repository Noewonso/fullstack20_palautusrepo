import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text} </button>
  )
}



const App = (props) => {
  const [selected, setSelected] = useState(0)
  let ok = Array(props.anecdotes.length).fill(0)
  const [votes, setVotes] = useState(ok)
  console.log(votes)
  const nextAnec = () => setSelected(Math.floor(Math.random() * props.anecdotes.length))
  const incVote = () => {
    const lol = [...votes]
    lol[selected] += 1
    setVotes(lol)
  }
  return (
    <div>

      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes!</p>
  
      <p>
        <Button handleClick={incVote} text='Vote' />
        <Button handleClick={nextAnec} text='Next anecdote' />
      </p>

      <h1> Anecdote with most votes </h1>
      
  <p> {props.anecdotes[[votes.indexOf(Math.max.apply(Math,votes))]]} </p>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
