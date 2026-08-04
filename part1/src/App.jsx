import { useState } from "react"

const Statistics = (props) =>
  <div>
    <h2>statistics</h2>
    <p>
      Good: {props.good}<br/>
      Neutral: {props.neutral}<br/>
      Bad: {props.bad}<br/>
      All: {props.total}<br/>
      Average: {props.value / props.total}<br/>
      positive: {props.good/ props.total * 100}%
    </p>
  </div>

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setAll] = useState(0)

  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const [value, setValue] = useState(0)

  const handleAverage = () =>{
    setAverage(setValue/setAll)
  }

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(total + 1)
    console.log('value now', value + 1)
    setValue(value + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('value now', value + 0)
    setAll(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(total + 1)
    console.log('value now', value - 1)
    setValue(value - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} value={value} />
    </div>
  )
}
export default App