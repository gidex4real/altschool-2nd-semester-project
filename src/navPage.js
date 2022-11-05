import { NavLink } from "react-router-dom";
import "./App.css";

export default function NavPage(){
  return(
    <nav className="nav-container">
      <ul className="nav-link">
        <li><CustomNavLink to="/">Home</CustomNavLink></li>
        <li><CustomNavLink to="r">My Github</CustomNavLink></li>
      </ul>
    </nav>
  )
}

export function CustomNavLink({ to, children, ...props }) {
  
  return(
    <NavLink 
      to={to}
      className={({isActive}) => isActive ? "active-link" : "normal-link"}
      end
      {...props}
      >
      {children}
    </NavLink>
  )
}

