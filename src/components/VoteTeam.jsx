import React from 'react';

function VoteTeam({ team, index, voteHomeTeam, voteDraw, voteAwayTeam }) {
    return (
        <div>
            <div style={{ display: index===0 ? "" : "none", marginRight: "auto", marginLeft: "auto" }}>
                <div style={{textAlign: "center", color: "white", border: "1px solid #ffffff"}}>
                    <h5>Category: {team.sport}</h5>
                    <p>
                        Country: {team.country}
                        <br></br>
                        Group: {team.group}
                    </p>
                
                </div>
                <div className="card">
                    <div className="row">
                        <div className="column-team-name">
                            <p>{team.homeName}</p>
                        </div>
                        <div className="column-team-name" style={{color: "gray"}}>
                            <p>VS</p>
                        </div>
                        <div className="column-team-name">
                            <p>{team.awayName}</p>
                        </div>
                    </div>   
                </div> 
                <div className="card">
                    <div className="row">
                        <div className="column team-logo">
                            HT
                        </div>
                        <div className="column play-status" style={{color: team.state==='STARTED' ? "green" : "red"}}>
                             {team.state}
                        </div>
                        <div className="column team-logo">
                            AT
                        </div>
                    </div>   
                </div>
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <p><button className="vote-btn" onClick={() => voteHomeTeam(index)}>Home Team</button></p>
                        </div>

                        <div className="column">
                            <p><button className="vote-btn" onClick={() => voteDraw(index)}>Draw</button></p>
                        </div>
                        <div className="column">
                            <p><button className="vote-btn" onClick={() => voteAwayTeam(index)}>Away Team</button></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
  }

  export default VoteTeam;