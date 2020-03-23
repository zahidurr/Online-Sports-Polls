import React, { useState } from "react";

function SigninForm({ addName }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addName(value);
      setValue("");
    };
  
    return (
      <div style={{color: "white", textAlign: "center"}}>
        <h1>Sports Polls & Polling Report</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter name"
            required
          />
          <button style={{margin: "10px 0 0 10px"}} className="menu-btn" type="submit"> Start</button>
        </form>
      </div>
    );
  }

export default SigninForm