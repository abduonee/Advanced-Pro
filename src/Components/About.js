import React from "react";
import '../Styles/About.css';
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="About bg-sky-300  h-full ">

            <div className="  grid text-center font-mono 
            sm:grid-cols-1 items-center    md:grid-cols-2 h-full">
                <div className="">
                    <img
                        src={require("../Assets/images/skills.jpeg")}
                        className="  rounded-full justify-center items-center
                         m-auto object-cover "
                        alt="bio"
                    />
                </div>

                <div className=" m-3 shadow-lg border-2 p-6 italic ">
                    <h1 className="text-3xl">Abdullah Yaqoob </h1>
                    <p className="text-2xl"> Front-end Developer React Lover</p>
                    <p className="p-2 m-2 text-wrap italic">My passion to the developement of web application began way back
                        Since I had got to know that I have the abilities to learn everything I wanted! </p>
                </div>
            </div>

            <div className="  grid   items-center justify-center gap-2 
            lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  bg-green-400">
                <div className=" projects  bg-sky-300 text-center font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/developer.jpeg")}
                        className=" rounded-lg object-cover m-auto mb-2"
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" > Read more about</Link>
                    </button>
                </div>
                <div className=" projects   bg-sky-300 text-center font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/main.webp")}
                        className=" rounded-lg object-cover m-auto mb-2"
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" >You can  read more </Link>
                    </button>
                </div>
                <div className=" mt-2 projects bg-sky-300  text-center w-auto font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/tools.jpeg")}
                        className=" rounded-lg object-cover m-auto "
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" >Wikipdia to read</Link>
                    </button>

                </div>

                <div className=" projects bg-sky-300  text-center w-auto font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/skill.jpeg")}
                        className=" rounded-lg object-cover m-auto "
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" >Wikipdia to read </Link>
                    </button>

                </div>
                <div className=" projects bg-sky-300 text-center w-auto font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/skill.jpeg")}
                        className=" rounded-lg object-cover m-auto "
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" >Wikipdia to read </Link>
                    </button>

                </div>
                <div className="  projects bg-sky-300  text-center w-auto font-mono object-cover m-auto">
                    <img
                        src={require("../Assets/images/skill.jpeg")}
                        className=" rounded-lg object-cover m-auto "
                        alt="about"
                    />
                    <h4>Customers experience</h4>
                    <p>So many projects I have ddone in last three months </p>
                    <button className="btn " >
                        <Link to="#" >Wikipdia to read </Link>
                    </button>

                </div>
                {/*  <!--///*/}


            </div>
        </div>
    );
};

export default About;
