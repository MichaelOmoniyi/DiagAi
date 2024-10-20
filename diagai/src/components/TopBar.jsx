import React, { useEffect } from "react";

const TopBar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".menu-btn");
    const navDisplay = document.querySelector(".navDisplay");
    hamburger.addEventListener("click", () => {
      if (hamburger.checked) {
        console.log("Hamburger checked");
        navDisplay.classList.add("show")
      } else {
        console.log("Hamburger unchecked");
        navDisplay.classList.remove("show");
      }
    });
  }, []);

  return (
    <div className="absolute left-0 right-0 bg-white">
      <div className="flex justify-between items-center p-4 lg:p-10">
        <h1 className="font-bold text-3xl">DiagAI 👩‍⚕️</h1>
        <div className="hamburgerContainer">
          <input
            className="menu-btn"
            type="checkbox"
            name="hamburger"
            id="hamburger"
          />
          <label className="menu-btn-label" for="hamburger">
            <span className="hamburger"></span>
          </label>
        </div>
        <div className="navDisplay p-4 bg-gray-300">
          <ul>
            <li>
              <a className="navA" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navA" href="#">
                Reports
              </a>
            </li>
            <li>
              <a className="navA" href="#">
                Docs
              </a>
            </li>
            <hr />
            <li>
              <a className="navA text-red-500" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
