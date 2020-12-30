import "./scss/style.css";
import Datas from "./headerContent";
import { Link } from 'react-router-dom'

export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="btm-left">
        {Datas.List.map((item) => {
          return <Link to={item.link}>{item.title}</Link>;
        })}
      </div>
      <div className="btm-right">
        {!Datas.IsLoggedIn ? (
          <div className="User_Details">
              <p>Hello! Username</p>
          </div>
        ) : (
          <div className="User_Details User_Details_btn">
              <li><a href='/'>Register</a></li>
              <li><a href='/'>Login</a></li>

          </div>
        )}
      </div>
    </div>
  );
}
