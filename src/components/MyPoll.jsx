import React from 'react';

function MyPoll({ team }) {
    return (
        <div>
            <div style={{ marginRight: "auto", marginLeft: "auto", marginBottom: "10px" }}>
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
                        <div className="column-team-name">
                        <p>Category: {team.sport}</p>
                        <p>
                            Country: {team.country}
                            <br></br>
                            Group: {team.group}
                        </p>
                        <p>Status: {team.state}</p>
                        <p>My Vote: <b>{team.voteType}</b></p>
                        </div>
                        
                    </div>   
                </div> 
            </div>
        </div>
    );
  }

export default MyPoll