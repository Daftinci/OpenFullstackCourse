const Hello = (props) => {
  const name = 'Peter'
  const age = 10
}

const bornYear = ()  => new Date().getFullYear()-age

const App = () => {
  

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default App