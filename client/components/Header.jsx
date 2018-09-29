import React from "react";
import Meet from './Meet';


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
    this.state = {
      // showAbout: false,
      // showTeam: false,
      // showContact: false,
    }
    // this.toggleMore = this.toggleMore.bind(this)
    // this.toggleTeam = this.toggleTeam.bind(this)
    this.showTeam = this.showTeam.bind(this)
  }

  // toggleMore() {
  //   this.setState({
  //     showAbout: false,
  //     showTeam: false,
  //     showContact: false,
  //   });
  // }

  // toggleTeam() {
  //   this.setState({
  //     showAbout: false,
  //     showTeam: true,
  //     showContact: false,
  //   });
  // }

  showTeam() {
    return (
      <Meet />
    )
  }

  render() {
    return (
      <div id='Header'>
        <h1>Lord of the News</h1>

        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a onClick={() => this.showTeam()}> Meet the Team</a>
            <a href="#">Contact</a>
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





