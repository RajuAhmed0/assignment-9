import React, { useContext } from 'react'; import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div>
      <nav className="bg-white shadow-md w-full fixed inset-x-0 top-0 z-30">
        <div className="max-w-[1320px] xl:mx-auto mx-2 ">
          <div className="flex justify-between md:h-16 h-12 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src='/img/logoweb.png' alt="" className='md:w-12 w-9' />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <NavLink to={"/"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Home</NavLink>
              <NavLink to={"/donationcam"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Donation Campaigns</NavLink>
              <NavLink to={"/howtohelp"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>How to Help</NavLink>
              <NavLink to={"/dashboard"} className={({ isActive }) =>
                `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
              }>Dashboard</NavLink>

            </div>

            {/* Donate Button */}
            <div className="hidden md:flex gap-2 items-center">
              <div className=' mt-2'>
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-9 h-9 rounded-full" />
                ) : (
                  <img src="/img/default-avatar.png" alt="Default Avatar" className="w-10 h-10 rounded-full" />
                )}

              </div>

              {
                user ?
                  <button onClick={() => handleLogOut()} className='bg-orange-600 hover:bg-black hover:rounded-3xl text-white px-4 py-2 mt-2 rounded-md'>Logout</button>
                  :
                  <Link to={"/login"}><button className='bg-orange-600 hover:bg-orange-400 text-white px-4 py-2 mt-2 rounded-md'>Login</button></Link>
              }
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <h2 className="   text-xl font-bold flex items-center gap-2">
                <span className="text-orange-600">DONATION</span> WORLD
              </h2>
              <div className=''>
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-7 h-7 rounded-full" />
                ) : (
                  <img src="/img/default-avatar.png" alt="Default Avatar" className="w-7 h-7 rounded-full" />
                )}

              </div>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Menu className="text-gray-700 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md p-4 flex flex-col">
            <NavLink to={"/"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Home</NavLink>
            <NavLink to={"/donationcam"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Donation Campaigns</NavLink>
            <NavLink to={"/howtohelp"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>How to Help</NavLink>
            <NavLink to={"/dashboard"} className={({ isActive }) =>
              `text-lg ${isActive ? "text-slate-400" : "text-gray-700"} hover:text-slate-400`
            }>Dashboard</NavLink>
            {
              user ?
                <button onClick={() => handleLogOut()} className='w-full bg-orange-600 hover:bg-black hover:rounded-3xl text-white px-4 py-2 mt-2 rounded-md'>Logout</button>
                :
                <Link to={"/login"}><button className='w-full bg-orange-600 hover:bg-orange-400 text-white px-4 py-2 mt-2 rounded-md'>Login</button></Link>
            }
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;