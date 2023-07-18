import React from "react";
import '../Styles/navigation.css';
import { Link, NavLink } from "react-router-dom";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

const Navigation = () => {
  return (
    <div>
      <header className="Nav-header flex  flex-wrap  justify-between p-6 bg-sky-600">
        {/**  ajkc.k */}
        <div className="logo sm:m-auto ">
          <Link to={'/'} className="">
            <img
              src={require("../Assets/images/ReactDev.jpeg")}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full  object-cover flex-1  "
            />
          </Link>
        </div>
        {/**  ajkc.k */}
        <div className="child flex   justify-center flex-wrap  items-center  p-4 gap-4 ">
          <NavLink to={"/AboutMe"} className="px-4  ">
            <h1 className="font-bold italic"> About me</h1>
          </NavLink>
          <NavLink to="#" className="px-4  ">
            <BsTwitter className="w-6" />
          </NavLink>
          <NavLink to={"https://www.youtube.com/"} className="px-4  ">
            <BsYoutube className="w-6" />
          </NavLink>
          <NavLink to={"https://www.facebook.com"} className="px-4  ">
            <BsFacebook className="bg-sky-700" />
          </NavLink>
        </div>
        {/**  ajkc.k */}
        <div className="child flex-1 justify-center items-center font-bold p-4  px-6 gap-4  ">
          <NavLink to={"/about"} className=" outline-none ">Projects</NavLink>
        </div>
        {/**  ajkc.k */}

        <div className=" child flex-1 justify-center items-center font-bold p-4  gap-4  ">
          <NavLink to={"/ContactMe"} className="  outline-none hover:scale-50 translateX duration-300 ease-in">
            Contat me
          </NavLink>

        </div>
      </header>
    </div>
  );
};

export default Navigation;
