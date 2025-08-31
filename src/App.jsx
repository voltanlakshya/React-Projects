import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // this callback doesnt create any sense here it was just used 
  // to show you its working.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){}_+`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passwordref = useRef(null);

  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="pw-bg">
      <div className="pw-card">
        <h1 className="pw-title">Password Generator</h1>
        <div className="pw-row">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordref}
            className="pw-input"
          />
          <button onClick={copypasswordtoclipboard} className="pw-copy-btn">
            Copy
          </button>
        </div>
        <div className="pw-controls">
          <label className="pw-label">
            Length
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="pw-slider"
            />
            <span className="pw-length">{length}</span>
          </label>
          <label className="pw-label">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setnumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>
          <label className="pw-label">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
        <button onClick={passwordGenerator} className="pw-generate-btn">
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;