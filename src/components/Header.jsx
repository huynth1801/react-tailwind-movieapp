import logo from "../assets/img/Netflix_icon.svg.png";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { TfiVideoCamera } from "react-icons/tfi";
import { useRef, useState } from "react";

const headerNav = [
  {
    display: "HOME",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    display: "MOVIES",
    path: "/movie",
    icon: <BiMoviePlay />,
  },
  {
    display: "TV SERIES",
    path: "/tv",
    icon: <TfiVideoCamera />,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="header h-32 fixed top-0 left-0 w-full items-center justify-center z-99">
      <div className="flex justify-between items-center px-8 max-w-[1660px] m-auto h-full">
        <div className="flex items-center justify-between w-full md:w-0">
          <div className="logo text-4xl flex items-center">
            <img
              src={logo}
              alt="Website logo"
              className="w-[30px] mr-4 md:w-[50px] md:mr-[30px]"
            />
            <Link to="/">Sunflix</Link>
          </div>
          <div
            className="text-3xl cursor-pointer md:hidden mobile-menu-btn"
            onClick={handleMenu}
          >
            <AiOutlineMenu />
          </div>
        </div>
        <div className="hidden md:block">
          <ul className=" md:flex md:justify-between md:items-center ">
            {headerNav.map((item, index) => (
              <li
                key={index}
                className="mx-8 my-8 md:my-0 text-2xl font-semibold flex items-center "
              >
                <div className="md:hidden mx-4">{item.icon}</div>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
            <DarkModeSwitch
              className=""
              style={{ marginLeft: "1.5rem" }}
              size={30}
              moonColor="yellow"
              sunColor="orange"
            />
          </ul>
        </div>

        <nav aria-label="Sidebar">
          <div className="h-screen px-2 py-4 overflow-y-auto ">
            <ul
              className={`fixed h-full shadow-lg z-1200 bg-white
                    text-black inset-y-0  left-0 w-70 
                    transition duration-500 ease transform ease-in-out ${
                      open ? null : "-translate-x-full"
                    }`}
            >
              {headerNav.map((item, index) => (
                <li
                  key={index}
                  className="mx-8 my-8  text-2xl font-semibold flex items-center "
                  onClick={handleMenu}
                >
                  <div className="md:hidden mx-4">{item.icon}</div>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}

              <DarkModeSwitch
                className="m-auto"
                style={{}}
                size={30}
                moonColor="yellow"
                sunColor="orange"
              />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
