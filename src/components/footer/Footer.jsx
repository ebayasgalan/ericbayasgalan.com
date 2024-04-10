import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()}
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
