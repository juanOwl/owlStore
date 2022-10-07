import "./navigation.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as OwlLogo } from '../../assets/dribbble_owl_02a-removebg-preview.svg'
import { UserContext } from "../../contexts/user-context";
import { userSignOut } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser)

  const signOutHandler = async () => {
    await userSignOut()
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <OwlLogo className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            )
               :
            (
          <Link className="nav-link" to="/sign">
            SIGN IN
          </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
