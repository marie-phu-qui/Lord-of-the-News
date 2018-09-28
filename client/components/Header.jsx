import React from "react";
import Meet from './Meet';


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function() {scrollFunction()};

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

const Header = () => {
  return (  
      <div id='Header'> 
    <h1>Lord of the News</h1>

<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={()=> closeNav()}>&times;</a>
  <div class="overlay-content">
    <a href="#">About</a>
    <a href="#">Meet the Team</a>
    <a href="#">Contact</a>
  </div>
</div>
<div id='navpopup'>
<button onClick={()=> openNav()}> More  </button>
<div id='myBtn'>
 <button onClick={()=>topFunction()}> Top </button>
</div>
</div>

    </div>
  )
}
export default Header





