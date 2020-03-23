import React, { useState, useEffect } from 'react';
import MyPoll from "./MyPoll";

function Polls() {
    const [votedTeams, setVotedTeams] = useState([]);

    useEffect(() => {
        if(window.localStorage.getItem("votedTeams"))
            setVotedTeams(JSON.parse(window.localStorage.getItem("votedTeams")));
      }, []);

    if (votedTeams && votedTeams.length > 0) {
        return (
            <div>
                <div style={{ textAlign: "center", color: "#ffffff", marginTop: "50px"}}>
                    <h2>My Polls</h2>
                </div>
                {votedTeams.map((votedTeam, index) => (  
                    <MyPoll
                        key={index}
                        team={votedTeam}
                    />
                ))}
            </div>
        );
    } else {
        return (
            ''
        );
    }
    
}

export default Polls