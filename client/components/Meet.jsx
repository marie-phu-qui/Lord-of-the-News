import React from "react";

const Meet = () => {
  return (
<div class="container">
	<div class="row">
		  <h1>
        The Team
       </h1>
	</div>
    <div class="row">
        <div class="col-sm-3">
            <div class="card">
                <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                <div class="avatar">
                    <img src="images/gandalf.jpeg" alt="" />
                </div>
                <div class="content">
                  <p>Marie </p>
                  <p>The wizard behind the project</p>
                    </div>
                 </div>
              </div>
              <div class="col-sm-3">
            <div class="card">
                <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                <div class="avatar">
                    <img src="images/frodo.jpeg" alt="" />
                </div>
                <div class="content">
                  <p>Kyoko </p>
                  <p>The courageous one</p>
                    </div>
                 </div>
              </div>
              <div class="col-sm-3">
               <div class="card">
              <canvas class="header-bg" width="250" height="70" id="header-blur"></canvas>
                  <div class="avatar">
                  <img src="images/gollum.jpeg" alt="" />
                </div>
                   <div class="content">
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