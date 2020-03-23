import React from 'react';

function ShowName({name}) {
    return (
        <div style={{color: "white", paddingTop: "30px"}}>
            <h2>Welcome {name}!</h2>
            <h3 style={{ textAlign: "center"}}>Guess the winner?</h3>
        </div>
      );
}

export default ShowName