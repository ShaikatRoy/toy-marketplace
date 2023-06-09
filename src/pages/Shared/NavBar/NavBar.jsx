import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        {user && (
      <>
        <li>
          <Link to="/myToys">My Toys</Link>
        </li>
        <li>
          <Link to="/addAtoy">Add A Toy</Link>
        </li>
      </>
    )}
        <li><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src="https://i.ibb.co/Qmn8X1Y/Black-White-Minimalist-Business-Logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <div className="avatar tooltip tooltip-left"  data-tip={user.displayName}>
                    <div className="w-10 me-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="" />
                    </div>
                    </div>
                    <Link onClick={handleLogOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign out</Link>
                    </> : <Link to="/login" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</Link>
                }
                
                
                
            </div>
        </div>
    );
};

export default NavBar;