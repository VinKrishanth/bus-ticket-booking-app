import { Link, useLocation } from 'react-router-dom'
import Logo from '../logo/Logo'
import { useState } from 'react';
import Switch from '../button/Switch';
import { useDispatch, useSelector } from 'react-redux';
import MenuButton from '../button/MenuButton';
import { NavigationLinks, MobileNavigateSource } from '../../utils/index.js'; 
import { toggleThemeAction } from '../../redux/theme-slice.jsx';


export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 
  const Theme = useSelector(state => state.theme.lightTheme);

  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className={`${Theme ? 'bg-white' : 'bg-gray-900' } shadow-md sm:px-8 px-4  ${isOpen && ' overflow-y-hidden md:min-h-fit min-h-screen '}`}>
      <nav className={`${Theme ? 'bg-white' : 'bg-gray-900' } border-gray-200`}>
        <div className={`max-w-screen flex flex-wrap items-center justify-between mx-auto p-4`}>
          <Logo />
          <div className={`flex justify-start items-center flex-row-reverse`}>
            <MenuButton 
              onClick={toggleMenu}
            />
            <Switch />
          </div>
          <div className={`flex w-full  md:w-auto gap-4 flex-row items-center`}>
            <div className={`${
                isOpen ? "flex min-h-[85vh]" : "hidden"
              } w-full md:block md:w-auto  rounded-xl`} id="navbar-default">
              <ul className={`font-medium flex flex-col p-4 md:p-0 mt-8 border-2 ${Theme ? 'border-gray-200 bg-gray-100 md:bg-white ' : 'bg-gray-800 md:bg-gray-900 border-gray-700 '}  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:min-w-fit min-w-full`}>
                {
                  NavigationLinks.map((navigation, index) =>  {
                    return(
                      <Link 
                        key={`${navigation.ID}${index}`}
                        to={navigation.URL}
                      >
                        <li
                          className={`block py-2 px-3 ${ location.pathname === navigation.URL ?  (Theme ? 'text-white bg-blue-700 md:text-blue-700 ' : 'text-white md:text-blue-500 bg-blue-700') : (Theme ? 'text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent md:border-0 ' : 'md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent text-white md:border-0 ') } rounded md:bg-transparent  md:p-0 `}
                          aria-current="page"
                        >
                          {navigation.Title}
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
            <Switch 
              customerStyle={true}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}


