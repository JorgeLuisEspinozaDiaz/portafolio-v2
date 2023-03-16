import React, { useState } from "react";
import foto from "../../public/nav.png";
const NavBar = () => {
  const [open, setOpen] = useState(true);

  const opens = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <i
          onClick={opens}
          className="fa-sharp fa-solid fa-bars w-10 h-10 rounded-full text-xl bg-[#03051c] fixed top-6 right-6 leading-[42px] text-center hidden max-[1050px]:block z-50 cursor-pointer"
        ></i>
      ) : (
        <i
          onClick={opens}
          className="fa-sharp fa-solid fa-xmark w-10 h-10 rounded-full text-xl bg-[#03051c] fixed top-6 right-6 leading-[42px] text-center hidden max-[1050px]:block   z-50 cursor-pointer"
        ></i>
      )}

      <header
        className={`h-screen bg-[#03051c] w-[300px] fixed top-0 left-0 bottom-0 py-8 px-6 z-[9999] transition-all duration-500 overflow-y-auto  ${
          open ? "max-[1050px]:left-[-300px]" : "max-[1050px]:left-[0px] "
        } `}
      >
        <div className="flex flex-col justify-center items-center ">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src={foto}
            alt=""
          />
          <h1 className="font-Roboto  text-3xl font-bold m-4">
            Jorge Espinoza
          </h1>
          <div className="flex gap-2 text-2xl  ">
            <a
              className="w-9 h-9 rounded-full bg-[#00dfd8]  flex justify-center items-center p-3 hover:bg-[#ddd9d9]	"
              href="#"
            >
              <i className="fa-brands fa-facebook text-2xl text-black "></i>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-[#00dfd8]  flex justify-center items-center p-3	 hover:bg-[#ddd9d9] 	"
              href="#"
            >
              <i className="fa-brands fa-twitter  text-2xl text-black "></i>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-[#00dfd8]  flex justify-center items-center p-3 hover:bg-[#ddd9d9]"
              href="#"
            >
              <i className="fa-brands fa-github  text-2xl text-black "></i>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-[#00dfd8]  flex justify-center items-center	p-3	hhover:bg-[#ddd9d9]"
              href="#"
            >
              <i className="fa-brands fa-instagram  text-2xl text-black "></i>
            </a>
          </div>
        </div>

        <nav className="mt-[50px]">
          <ul className="flex  flex-col gap-6">
            <li className="">
              <a
                href="#Home"
                className="hover:text-[#00dfd8]   cursor-pointer  "
              >
                <i className="fa-solid fa-house text-xl mr-[10px] "></i>
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-[#00dfd8]    cursor-pointer"
              >
                <i className="fa-solid fa-user text-xl mr-[10px] "></i>
                Acerca de Mí
              </a>
            </li>
            <li>
              <a
                href="#Project"
                className="hover:text-[#00dfd8]  cursor-pointer "
              >
                <i className="fa-solid fa-briefcase text-xl mr-[10px] "></i>
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-[#00dfd8]   cursor-pointer"
              >
                <i className="fa-solid fa-address-book text-xl mr-[10px] "></i>
                Contactos
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`text-center w-[300px] fixed   bottom-0 mb-4  left-0 transition-all duration-500 ${
            open ? "max-[1050px]:left-[-300px]" : "max-[1050px]:left-[0px]"
          }`}
        >
          <p>&copy; Jorge espinoza, 2023 Todos los derechos reservados</p>
        </div>
      </header>
    </>
  );
};

export default NavBar;
