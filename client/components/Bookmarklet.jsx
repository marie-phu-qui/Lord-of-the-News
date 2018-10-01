import React from "react";


const Bookmarklet = () => {
  return (

    <div className="navbar navbar-expand-lg ">
      <a href="javascript:(function () {let script = document.createElement('script'); script.src = 'noWords.js'; document.body.appendChild(script) })();
">Bookmarklet</a>
      {/* <p>Drag any of these links to your bookmark and gollumify or nazgulify any web page.</p> */}
    </div>
  )
}

export default Bookmarklet