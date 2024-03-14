import Image from "next/image";
import React from "react";
import "./style.css";
const Header = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-lightblue navbar-dark">
        <a className="navbar-brand" href="/cart">
          <Image
            alt=""
            src={"https://www.coindesk.id/images/logo.svg"}
            width={200}
            height={200}
          ></Image>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/wallet">
              Nạp tiền
            </a>
          </li>
          <li className="nav-item">
            <a
              id="btn-sidebar"
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
