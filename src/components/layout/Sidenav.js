
import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import icon1 from "../../assets/images/learn.svg";
// import icon2 from "../../assets/images/sip.svg";
// import icon3 from "../../assets/images/sector.svg";
// import icon4 from "../../assets/images/index.svg";
// import Profile from "../../assets/images/side-profile.svg";
// import Dashboard from "../../assets/images/dashboard.svg";
function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  return (
    <>
      <div className="brand">
        <a href="/">
          {/* <img src={logo} alt="" /> */}
          <span>Taxi Panel</span>
        </a>
      </div>
      <hr />
      {/* <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/">
            <span
              className="icon"
              style={{
                background: page === "/" ? color : "",
              }}
            >
              <img src={icon1} />
            </span>
            <span className="label">Learn Stories</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/index-etf">
            <span
              className="icon"
              style={{
                background: page === "index-etf" ? color : "",
              }}
            >
              <img src={icon4} />
            </span>
            <span className="label">Index ETF</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/country-etf">
            <span
              className="icon"
              style={{
                background: page === "country-etf" ? color : "",
              }}
            >
              <img src={icon4} />
            </span>
            <span className="label">Country ETF</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/sector-etf">
            <span
              className="icon"
              style={{
                background: page === "sector-etf" ? color : "",
              }}
            >
              <img src={icon3} />
            </span>
            <span className="label">Sector ETF</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/popular-sip">
            <span
              className="icon"
              style={{
                background: page === "popular-sip" ? color : "",
              }}
            >
              <img src={icon2} />
            </span>
            <span className="label">Popular SIP</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6">
          <NavLink to="/popular-symbol">
            <span
              className="icon"
              style={{
                background: page === "popular-symbol" ? color : "",
              }}
            >
              <img src={icon2} />
            </span>
            <span className="label">Popular Symbol</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              <img src={Profile} />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>


      </Menu > */}

    </>
  );
}

export default Sidenav;
