import {  useEffect, useState } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useCloseState, useUserIDContext } from "./Context";
import Modal from "./Modal";
import CartData from "./CartData";
import { IoBagOutline } from "react-icons/io5";
import { LuArrowRightFromLine } from "react-icons/lu";
import { useAuthContext } from "../main";

function Navbar() {
  const cart = useCart();
  const {authToken , setAuthToken} = useAuthContext()
  const {UserID , setUserID} = useUserIDContext();
  const Userid = UserID;

  const { state, dispatch } = useCloseState();

  const toggleModal = () => {
    dispatch({ type: "TOGGLE_MODEL" });
  };

  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

 

  const removeToken = () => {
    
    setAuthToken(localStorage.removeItem("authToken"));
    setUserID(localStorage.removeItem("userID"));
    navigate("/");
    console.log('Token removed');
  };
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary header"
        style={{ width: "100%", height: "5rem" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            HaveEat!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-between">
              <Link
                className="nav-link align-items-center"
                aria-current="page"
                to="/"
              >
                Home
              </Link>

              {Userid  && authToken ? <Link className="nav-link align-items-center"
                aria-current="page"
                to="/order/history"
              >
                History
              
              </Link> : ""}
            </ul>
            <div className="d-flex">
              <button
                className=" btn-icon position-relative  m-3"
                onClick={toggleModal}
              >
                <IoBagOutline className="myicon" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}{" "}
                </span>
              </button>
              <Modal show={state} onClose={toggleModal}>
                <CartData />
              </Modal>
              {!authToken ? (
                <div className="d-flex">
                  <Link
                    className="nav-link  m-2 "
                    aria-current="page"
                    to="/signup"
                  >
                    Sign-up
                  </Link>
                  <Link className="nav-link m-2" to="/login">
                    Log-in
                  </Link>
                </div>
              ) : (
                <div className="nav-item  w-100">
                  <button className=" btn-icon m-3" onClick={removeToken}>
                    <LuArrowRightFromLine className="myicon" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <button className="btn ms-2" onClick={toggleTheme}>
            {theme === "light" ? (
              <GoMoon style={{ fontSize: "24px" }} />
            ) : (
              <GoSun style={{ fontSize: "24px" }} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
