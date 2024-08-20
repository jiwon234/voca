import { useState } from "react";

export default function (params) {
    
    const [menuVisible, setMenuVisible] = useState(false);

    // Function to toggle the menu visibility
    function toggleMenu() {
        setMenuVisible(prevState => !prevState);
    }


    return (
        <>
          <nav
            id="myLinks"
            className={`flex flex-col gap-6 fixed right-16 bottom-16`}
          >
            <div
              className={`h-20 w-20 rounded-full bg-neutral-800 text-white text-lg shadow-2xl shadow-neutral-500 grid place-items-center 
                hover:bg-gray-200 ${menuVisible ? 'block' : 'hidden'}`}
            >
              메뉴1
            </div>
            <div
              className={`h-20 w-20 rounded-full bg-neutral-800 text-white text-lg shadow-2xl shadow-neutral-500 grid place-items-center 
                hover:bg-gray-200 ${menuVisible ? 'block' : 'hidden'}`}
            >
              메뉴2
            </div>
            <div
              className={`h-20 w-20 rounded-full bg-neutral-800 text-white text-lg shadow-2xl shadow-neutral-500 grid place-items-center 
                hover:bg-gray-200  ${menuVisible ? 'block' : 'hidden'}`}
            >
              설정
            </div>
            <div
                onClick={toggleMenu}
              className={`h-20 w-20 rounded-full bg-neutral-800 text-white text-lg shadow-2xl shadow-neutral-500 grid place-items-center
                `}
            >
              메뉴
            </div>

          </nav>
        </>
      );
    }