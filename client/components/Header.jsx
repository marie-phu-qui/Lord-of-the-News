import React from "react";


function openNav() {
  console.log('hellos');
  
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
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
<button onClick={()=> openNav()}> More </button>
</div>

    </div>
  )
}

export default Header




