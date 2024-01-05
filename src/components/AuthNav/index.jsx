import { NavLink } from 'react-router-dom';

const linkStyle = {
  margin: "1rem",
  fontWeight: 'bold',
  
};
export const AuthNav = () => {
  return (
    <div>
        <NavLink style={linkStyle} to="/register" >Sign Up</NavLink>
        <NavLink style={linkStyle} to="/login">Log In</NavLink>

    </div>
  );
};