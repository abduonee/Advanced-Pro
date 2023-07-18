import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
//import { AiFillFacebook } from "react-icons/ai";
// { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-sky-400  font-mono gap-2 text-center 
 ">
            <div className=" font-bold flex gap-6 py-4  items-center justify-center flex-wrap">
                <div>
                    <BsFacebook />
                </div>
                <div>
                    <BsInstagram />
                </div>
                <div>
                    <BsGithub />
                </div>
                <div>
                    <BsWhatsapp />
                </div>
            </div>
            <p> &copy; Copyright 2023 React developer abduone.com</p>
        </div>
    );
};

export default Footer;
