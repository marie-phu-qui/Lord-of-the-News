import React from "react";


const ChromeExt = () => {
  return (
    <div className='overlay-content'>
      <p style={{ color: 'white' }}>
        This is a CRX file - Your can install it as a Chrome developer through 'Load Unpacked'.
    </p>
      <a href="/chrome_ext.crx" download="Gollumify">
        <button>Bless us and splash us, precious</button>
      </a>
    </div>
  )
}

export default ChromeExt