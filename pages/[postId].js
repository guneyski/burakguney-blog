import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faReact,
  faBootstrap,
  faJs,
  faHtml5,
  faCss3
} from "@fortawesome/free-brands-svg-icons";

const BlogPost = ({ post }) => (
  <div className="color">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://kit.fontawesome.com/66a68650ec.js"
        crossorigin="anonymous"
      ></script>
    </Head>
    <div className="sticky">
      <Nav></Nav>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 p-1">
          <div className="shadow mb-2 rounded bg-light">
            <div>
              <img
                src="burakguney.jpg"
                className="avatar mr-auto mt-2 ml-2"
              ></img>
              <span className="ml-2 font-weight-bold">@burakguney</span>
              <h6 className="d-block text-right mr-3 text-dark font-italic rounded">
                {post.date}
              </h6>
            </div>
            <div className="card-body">
              <img src={post.img} className="img"></img>
              <h3 className="card-title mr-auto ml-auto text-center">
                <Link href={post.slug}>
                  <a className="card-text nav-link text-secondary">
                    {post.title}
                  </a>
                </Link>
              </h3>
              <p className="card-text">
                <ReactMarkdown source={post.details} />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    <div className="p-3 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <Link href="https://reactjs.org/">
              <a className="text-light mr-2" target="_blank">
                <FontAwesomeIcon icon={faReact} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <a className="text-light mr-2" target="_blank">
                <FontAwesomeIcon icon={faJs} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
            <Link href="https://developer.mozilla.org/tr/docs/Web/HTML">
              <a className="text-light mr-2" target="_blank">
                <FontAwesomeIcon icon={faHtml5} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <a className="text-light mr-2" target="_blank">
                <FontAwesomeIcon icon={faCss3} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
            <Link href="https://getbootstrap.com/">
              <a className="text-light mr-2" target="_blank">
                <FontAwesomeIcon icon={faBootstrap} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <a className="text-light" href="/">
              <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>burakguney
            </a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      * {
      }
      .color {
        background: #e9ecef;
      }
      .img {
        width: 100%;
        height: auto;
      }
      .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      div.sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(
    `https://burakguney-blog.herokuapp.com/api/post/${query.postId}`
  );
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
