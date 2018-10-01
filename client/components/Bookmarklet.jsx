import React from "react";


const Bookmarklet = () => {
  return (

    <div className="navbar navbar-expand-lg ">
      <a href="javascript:(function () {
  var script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/marie-phu-qui/Lord-of-the-News/master/server/lib/gollum.js';
  console.log(script.src)
  
  document.body.appendChild(script);
})();
">Bookmarklet</a>
      {/* <p>Drag any of these links to your bookmark and gollumify or nazgulify any web page.</p> */}
    </div>
  )
}

export default Bookmarklet