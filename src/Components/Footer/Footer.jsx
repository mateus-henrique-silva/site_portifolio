import React from "react";
import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Instagram</li>
          </ul>
        </nav>
        <form>
          <input
            type="text"
            placeholder="Nome"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="message"
            placeholder="Menssagem"
            required
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </footer>
    </>
  );
};

export default Footer;
