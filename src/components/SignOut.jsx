import React from 'react';

function SignOut() {
    const logout = text => {
        window.localStorage.clear();
        window.location.reload();
      };

    return (
        <div>
          <button className="menu-btn" onClick={logout} style={{maxWidth: "90px", float: "right"}}>Logout</button>
        </div>
      );
}

  export default SignOut