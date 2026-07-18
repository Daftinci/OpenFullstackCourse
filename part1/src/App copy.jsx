const Header =  (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => { 
  return (<div>
    {props.courseParts.map(item => <p> {item.part} {item.name} {item.exercises} </p>)}  
  </div>)
}

const Total = (props) =>{
  return (<div>{props.parts.reduce(total.item)=> total + item.exercises}</div>)
}

const App = () => {
  const course = "Half Stack application development"
  const courseParts = [
    {part:1, name: 'Fundamentals of React', exercises:10},
    {part:2, name: 'Using props to pass data', exercises:7},
    {part:3, name: 'State of a component', exercises:14}
  ]
  



  return (
   <div>
    <Header course ={course}/>
    <Content courseParts={courseParts}/>
    <Total total={total} />
   </div>
  )
}

export default App