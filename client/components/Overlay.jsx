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

class Overlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContact: false,
      showTeam: false,
      showAbout: false
    }
    this.showContact = this.showContact.bind(this)
    this.showAbout = this.showAbout.bind(this)
    this.showTeam = this.showTeam.bind(this)
  }

  showTeam() {
    console.log('show meeeeeeeeeeeeee TEAM')
    this.setState({
      showContact: false,
      showTeam: true,
      showAbout: false
    })
  }
  showAbout() {
    console.log('show meeeeeeeeeeeeee ABOUT')
    this.setState({
      showContact: false,
      showTeam: false,
      showAbout: true
    })
  }
  showContact() {
    console.log('show meeeeeeeeeeeeee CONTACT')
    this.setState({
      showContact: true,
      showTeam: false,
      showAbout: false
    })
  }

  render() {
    return (
      <div id='Header'>
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="overlay-content">
            <a href="#" id='about-project' onClick={() => this.showAbout()}>
              About</a>
            {(this.state.showAbout) ? <About /> : console.log('nope')}
            <a href="#" id='meet-team' onClick={() => this.showTeam()}>
              Meet the Team</a>
            {(this.state.showTeam) ? <Meet /> : console.log('nope')}
            <a href="#" id='contact-list' onClick={() => this.showContact()}>
              Contact</a>
            {(this.state.showContact) ? <Contact /> : console.log('nope')}
          </div>
        </div>
        <div id='navpopup'>
          <button onClick={() => openNav()} type="button" class="btn btn-light btn-lg"> More  </button>
          <div id='myBtn'>
            <button onClick={() => topFunction()}> Top </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Overlay





