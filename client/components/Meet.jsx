import React from "react";


const Meet = () => {
  return (
    <div className="meet-container">
      <div className="row">
        <h1>
          The Team
       </h1>
      </div>
      <div className="row">
        <div className="col-sm-4 d-flex align-items-stretch">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="images/gandalf.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Marie</h5>
              <h6 className="card-subtitle mb-2 text-muted">The wizard behind the project</h6>
              <p className="card-text">For Machine Learning(TensorFlow.js), API + Testing, Natural Language Processing(Compromise.js), Chrome Extension queries</p>
              <p>
              <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseMarie" aria-expanded="false" aria-controls="collapseMarie">
              Contact  
              </button>
              </p>
              <div className="collapse" id="collapseMarie">
                <div className="card card-body">
                  Email: marie.nguyen.phu.qui at gmail.com<br/>
                  Phone: 02108934396                
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex align-items-stretch">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="images/frodo.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Kyoko</h5>
              <h6 className="card-subtitle mb-2 text-muted">The courageous one</h6>
              <p className="card-text">For React, Redux, Testing, CSS, Natural Language Processing, Basic Chrome Extension queries</p>
              <p>
              <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseKyoko" aria-expanded="false" aria-controls="collapseKyoko">
              Contact  
              </button>
              </p>
              <div className="collapse" id="collapseKyoko">
                <div className="card card-body">
                  Email: kmpohe at gmail.com<br/>
                  Phone: 0211991056                
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm- d-flex align-items-stretch">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="images/gollum.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Nat</h5>
              <h6 className="card-subtitle mb-2 text-muted">The ambitious one</h6>
              <p className="card-text">For React, CSS, User Interface, User Experience, GIF queries </p>
              <p>
              <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseNat" aria-expanded="false" aria-controls="collapseNat">
              Contact  
              </button>
              </p>
              <div className="collapse" id="collapseNat">
                <div className="card card-body">
                  Email: nat_sirisamphan at hotmail.com<br/>
                  Phone: 0220723077               
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meet