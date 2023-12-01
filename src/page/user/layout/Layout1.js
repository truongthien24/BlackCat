import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../component/Footer";
import { ScrollToTop } from "../component/ScrollToTop";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/action/accountAction";
import Navbar from "../component/Navbar";
import { setUserInfo } from "redux/action/homeAction";
import { jwtDecode } from "jwt-decode";
import useGetAccountByID from "page/admin/page/AccountManagement/hook/useGetAccountByID";

export const LayoutContext = createContext(null);

export const Layout1 = () => {
  const pathname = window.location.pathname;

  const dispatch = useDispatch();

  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const [id, setId] = useState(null);

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    if (jwt) {
      const jwtDC = jwtDecode(jwt);
      setId(jwtDC?.users?._id);
    }
  }, []);

  window.addEventListener("resize", () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  });

  const { accountData, isDataLoading, fetchData, isFetching } =
    useGetAccountByID({ id: id });

  useEffect(() => {
    if (accountData) {
      dispatch(setUserInfo(accountData));
    }
  }, [accountData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ isMobile: isMenuMobile, fetchDataAccount: fetchData }}>
      <div className="user bg-[#fcfcfc]">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-between">
          <Outlet />
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </LayoutContext.Provider>
  );
};
