import React from "react";

import Meet from './Meet';
import About from './About';
import Contact from './Contact';
import ChromeExt from './ChromeExt';


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

// Must keep export here also for testing purposes 
export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
      showTeam: false,
      showAbout: false,
      showExt: false
    }
    this.showContact = this.showContact.bind(this)
    this.showAbout = this.showAbout.bind(this)
    this.showTeam = this.showTeam.bind(this)
    this.showExt = this.showExt.bind(this)
  }

  showTeam() {
    this.setState({
      showContact: false,
      showTeam: true,
      showAbout: false,
      showExt: false
    })
  }
  showAbout() {
    this.setState({
      showContact: false,
      showTeam: false,
      showAbout: true,
      showExt: false
    })
  }
  showContact() {
    this.setState({
      showContact: true,
      showTeam: false,
      showAbout: false,
      showExt: false
    })
  }

  showExt() {
    this.setState({
      showContact: false,
      showTeam: false,
      showAbout: false,
      showExt: true
    })
  }
  render() {
    return (
      <div id='Header'>
        <h1>Lord of the News</h1>

        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="overlay-content">
            <a href="#" id='about-project' onClick={() => this.showAbout()}>
              About</a>
            {this.state.showAbout && <About />}
            <a href="#" id='meet-team' onClick={() => this.showTeam()}>
              Meet the Team</a>
            {this.state.showTeam &&  <Meet />}
            <a href="#" id='contact-list' onClick={() => this.showContact()}>
              Contact</a>
            {this.state.showContact && <Contact />}
            <a href="#" id='download-ext' onClick={() => this.showExt()}>
              Gollumify your Chrome</a>
            {this.state.showExt && <ChromeExt />}
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





