import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear} Notesapp All rights reserved</p>
    </footer>
  );
}

export default Footer;
