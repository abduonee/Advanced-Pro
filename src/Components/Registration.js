import React, { useState } from "react";
//import { validateEmail } from "./utils";
import "../Styles/Registration.css";
export const Registrations = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const OnSubmit = (e) => {
        e.preventDefault();
        setName("");
        setFullName("");
        setEmail("");
        setText("");
        alert("Thank you very much for contacting me !");
    };
    return (
        <>
            <div className="form-container grid grid-cols-1 w-full md:grid-cols-1  ">
                <form className="  " onSubmit={OnSubmit}>
                    <h1 className="text-2xl font-bold ">Contact Me</h1>
                    <fieldset>
                        <div className="Field ">
                            <label htmlFor="name">
                                Firt Name:{" "}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="first name"
                                maxLength={20}
                                minLength={3}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="Field ">
                            <label htmlFor="flname">
                                Full Name:{" "}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="flname"
                                required
                                placeholder="full name "
                                maxLength={20}
                                minLength={5}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="Field  ">
                            <label htmlFor="email">
                                Email Address:{" "}
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className="Field  ">
                            <label htmlFor="textarea">How can I help</label>
                            <textarea
                                type="text"
                                name="textarea"
                                id="textarea"
                                placeholder="How can I help you?"
                                min={200}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onBlur={(e) => {
                                    console.log("Triggered because this input lost focus");
                                }}
                            />
                        </div>

                        <button
                            disabled={!name}
                            type="submit"
                            className="p-2 w-40 italic roundded "
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
};
