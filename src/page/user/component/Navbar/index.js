import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const [isProfile, setIsProfile] = useState(false);

  window.addEventListener("resize", () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  });

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  }, []);
  return (
    <>
      {isMenuMobile ? (
        <NavbarMobile setIsProfile={setIsProfile} />
      ) : (
        <NavbarDesktop setIsProfile={setIsProfile} />
      )}
    </>
  );
};

export default Navbar;
