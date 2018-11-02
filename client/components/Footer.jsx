import React from "react";

const Footer = props => {
  return (
    <div className="container-footer">
      <div id='footer'>
        <a className="text-success" href='https://github.com/marie-phu-qui/Lord-of-the-News/blob/master/README.md'>
          Our github
        </a>
        <p className="font-italic">
          The news API is provided by Google News. Thank you Google News.
        </p>
      </div>
    </div>
  );
};

export default Footer;