import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = () => {
  return(
    <h1>How was the goods and services you exchanged for bits from your bank account today?</h1>
  )
}

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
        {text}
      </button>
  )
}

const StatisticLine = ({ text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good-bad)/all
  const positive = good / all * 100
  if (all !== 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="Good" value ={good} /> </td>
            </tr>
            <tr>
              <td><StatisticLine text="Neutral" value ={neutral} /> </td>
            </tr>
            <tr>
              <td><StatisticLine text="Bad" value ={bad} /> </td>
              </tr>
            <tr>
              <td><StatisticLine text="All" value ={all} /> </td>
              </tr>
            <tr>
              <td><StatisticLine text="Average" value ={average} /> </td>
              </tr>
            <tr>
              <td><StatisticLine text="Positive %" value ={positive} /> </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet.</p>
    </div>
  )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodUp = () => setGood(good + 1)
  const neutralUp = () => setNeutral(neutral + 1)
  const badUp = () => setBad(bad + 1)

  return (
    <div>
      <Header/>

      <Button
        handleClick = {goodUp}
        text='good'
      />
      <Button
        handleClick = {neutralUp}
        text='neutral'
      />

      <Button
        handleClick = {badUp}
        text='bad'
      />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
