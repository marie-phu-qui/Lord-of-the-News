import React from "react";

const Meet = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>
          The Team
       </h1>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>
            <div className="avatar">
              <img src="images/gandalf.jpeg" alt="" />
            </div>
            <div className="content">
              <p>Marie </p>
              <p>The wizard behind the project</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>
            <div className="avatar">
              <img src="images/frodo.jpeg" alt="" />
            </div>
            <div className="content">
              <p>Kyoko </p>
              <p>The courageous one</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>
            <div className="avatar">
              <img src="images/gollum.jpeg" alt="" />
            </div>
            <div className="content">
              <p>Nat </p>
              <p>The ambitious one</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Meet