import React, { useState, useEffect } from 'react';

import VoteTeam from "./VoteTeam";
import thumbsup_img from '../img/thumbsup.png';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [votedTeams, setVotedTeams] = useState(window.localStorage.getItem("votedTeams") ? JSON.parse(window.localStorage.getItem("votedTeams")) : []);  

  function placeVote (index, type) {
    const tempTeams = [...teams];
    
    
    const tempVotedTeams = tempTeams[index];
    tempVotedTeams.voteType = type;
    const tempVotedTeams1 = [...votedTeams, tempVotedTeams];
    tempTeams.splice(index, 1);
    setTeams(tempTeams);

    setVotedTeams(tempVotedTeams1);
    window.localStorage.setItem("teams", JSON.stringify(tempTeams));
    window.localStorage.setItem("votedTeams", JSON.stringify(tempVotedTeams1));

    window.location.reload();
  };

  const voteHomeTeam = index => {
    placeVote(index, "Home Team");
  };

  const voteDraw = index => {
    placeVote(index, "Draw");
  };

  const voteAwayTeam = index => {
    placeVote(index, "Away Team");
  };
  
  useEffect(() => {
    setTeams(JSON.parse(window.localStorage.getItem("teams")));
  }, []);

  return (
    <div>
        {teams.map((team, index) => (  
            <VoteTeam
                key={index}
                index={index}
                team={team}
                voteHomeTeam={voteHomeTeam}
                voteDraw={voteDraw}
                voteAwayTeam={voteAwayTeam}
            />
        ))}
        <div style={{ display: teams.length===0 ? "" : "none", textAlign: "center", color: "#ffffff"}}>
            <img style={{width: "100px"}} src={thumbsup_img} alt="Finished" />
            <p>Hurray! Finished.</p>
        </div>
    </div>
  );
}
export default Teams;