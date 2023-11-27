import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <div className="w-screen h-screen  flex flex-col justify-center items-center">
      <h2>Error 404!</h2>
      <NavLink to="/" className="text-main">go Home.</NavLink>
      <NavLink to="/docs" className="text-main">go Docs.</NavLink>
    </div>
  )
}

export default Error