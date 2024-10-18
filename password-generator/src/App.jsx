import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  function generatePassword() {
    let output = "";
    const allCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+<>?/|,.";

    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * allCharacters.length - 1);

      let randomChar = allCharacters[random];

      output += randomChar;
    }

    setPassword(output);
  }

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <>
      <div className="border border-red-500 p-5">
        <p>PASSWORD GENRATOR</p>
        <br />
        <input
          value={password}
          type="text"
          className="border m-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            generatePassword();
          }}
          className="border p-3 m-5"
        >
          generate
        </button>

        <button
          onClick={() => {
            window.navigator.clipboard.writeText(password);
          }}
          className="border p-3 m-5"
        >
          copy
        </button>
      </div>
    </>
  );
}

export default App;
