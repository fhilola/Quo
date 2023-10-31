import './index.css'
const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
}
const Description = ({text})=>{
  return(
    <p>{text}</p>
  )
}
const Title = (text)=>{
  return(
    <h2>{text}</h2>
  )
}
const Container = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
export {Button, Description, Title, Container}