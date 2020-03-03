import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav ml-5">
          <li className="nav-item ml-5">
            <Link href="http://burakguney-blog.herokuapp.com">
              <a className="nav-link active">
                <FontAwesomeIcon
                  icon={faHome}
                  size="2x"
                  className="mr-1"
                ></FontAwesomeIcon>
                Ana Sayfa
              </a>
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item mr-5">
              <Link href="#">
                <a className="nav-link">
                  <FontAwesomeIcon
                    icon={faPortrait}
                    size="2x"
                    className="mr-1"
                  ></FontAwesomeIcon>
                  Hakkımda
                </a>
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link href="https://www.linkedin.com/in/burak-g%C3%BCney-2889b8134/">
                <a className="nav-link" target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="mr-1"
                  ></FontAwesomeIcon>
                  Linkedin
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://github.com/guneyski">
                <a className="nav-link" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="mr-1"
                  ></FontAwesomeIcon>
                  Github
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .avatar {
          vertical-align: middle;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: none;
        }
        @media screen and (max-width: 991px) {
          .avatar {
            display: inline-block;
          }
        }
      `}</style>
    </nav>
  </div>
);

export default Nav;
