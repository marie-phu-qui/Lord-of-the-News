import React from "react";


const ChromeExt = () => {
  return (
    <div className='overlay-content'>
      <p style={{ color: 'white' }}>
        This is a CRX file - Your can install it as a Chrome developer through 'Load Unpacked'. <br></br>
        Bless us and splash us, precious.
    </p>
      <button onClick={() => downloadExt()}>Come here my precious extension</button>
    </div>
  )
}

const downloadExt = () => {

}

export default ChromeExt