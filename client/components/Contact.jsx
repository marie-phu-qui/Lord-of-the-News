import React from "react";


const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>
          Contact       
        </h1>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="content">
              <p>For React, CSS, UI, UX queries </p>
              <p>Nat</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="content">
              <p>For React, Redux, Testing, Natural Language Processing(Compromise.js), Basic Chrome Extension queries </p>
              <p>Kyoko</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="content">
              <p>For Machine Learning(TensorFlow.js), API + Testing, Natural Language Processing(Compromise.js), Chrome Extension queries </p>
              <p>Marie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact