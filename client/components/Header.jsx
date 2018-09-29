import React from "react";

import Meet from './Meet';
import About from './About';
import Contact from './Contact';


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.showContact = this.showContact.bind(this)
    this.showAbout = this.showAbout.bind(this)
    this.showTeam = this.showTeam.bind(this)
  }


  showTeam() {
    console.log('show meeeeeeeeeeeeee TEAM')
    return (
      <Meet />
    )
  }
  showAbout() {
    console.log('show meeeeeeeeeeeeee ABOUT')
    return (
      <About />
    )
  }
  showContact() {
    console.log('show meeeeeeeeeeeeee CONTACT')
    return (
      <Contact />
    )
  }

  render() {
    return (
      <div id='Header'>
        <h1>Lord of the News</h1>

        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="overlay-content">
            <a href="/about" onClick={() => this.showAbout()}>About</a>
            <a href="/team" onClick={() => this.showTeam()}> Meet the Team</a>
            <a href="/contact" onClick={() => this.showContact()}>Contact</a>
          </div>
        </div>
        <div id='navpopup'>
          <button onClick={() => openNav()}> More  </button>
          <div id='myBtn'>
            <button onClick={() => topFunction()}> Top </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Header





