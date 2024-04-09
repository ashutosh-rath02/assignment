import PropTypes from "prop-types";
import { useState } from "react";

const Sidebar = ({ menus }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex mx-4 my-4 font-poppins">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } flex flex-col bg-primary rounded-4xl p-5 pt-8 relative duration-300 h-[95vh] shadow-2xl`}
      >
        <img
          src="./src/assets/Control.svg"
          className={`cursor-pointer self-end w-7 border-primary
           border-2 rounded-full mb-4 ${!open && "rotate-180 self-center"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/Logo.svg"
            className={`cursor-pointer self-center mt-1 w-9 ml-2 aspect-square duration-500 ${
              open && "ml-2 rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-bold text-xs sm:text-3xl  md:text-4xl duration-200 ${
              !open && "hidden"
            }`}
          >
            Catalix
          </h1>
        </div>
        <ul className="pt-6 h-full">
          {menus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex rounded-2.5xl p-3 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
      ${Menu.gap ? "mt-4" : "mt-4"} ${index === 0 && "bg-light-white"} `}
              >
                <img src={`./src/assets/${Menu.src}`} className="h-5" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
              {menus[index + 1]?.gap && (
                <div className="h-0.5 mt-24 w-[98%] flex bg-gray-300 items-center"></div>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};

Sidebar.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      gap: PropTypes.bool,
    })
  ).isRequired,
};

export default Sidebar;
