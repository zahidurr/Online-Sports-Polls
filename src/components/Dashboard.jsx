import React, { useState, useEffect } from "react";
import SigninForm from "./SigninForm";
import ShowName from "./ShowName";
import SignOut from "./SignOut";
import Teams from "./Teams";
import Polls from "./Polls";
import data_file from "../db/test-assignment";

function Dashboard() {
    const initialName = () => String(window.localStorage.getItem('name') || "");
    const [name, setName] = useState(initialName);

    const addName = text => {
        const newName = [ text ];
        setName(newName);
      };

      useEffect(() => {
          window.localStorage.setItem('name', name);

          if(!window.localStorage.getItem("name")) {
            window.localStorage.setItem("teams", JSON.stringify(data_file));
          }
      }, [name]);

    if (name !== "") {
        return ( 
            <React.Fragment>
                <SignOut />
                <ShowName name={name} />
                <Teams />
                <Polls />
            </React.Fragment>
        );
    }
    return ( 
        <SigninForm addName={addName} />
    );
}

  export default Dashboard