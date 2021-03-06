import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Commentarea from "./comment";
import CodeBlock from "./codeblog";
import CommentSarea from "./comments";
const Blog = props => (
  <div>
    <div className="card ">
      <div className="card-image hoverable">
        <a href={"/" + props.slug}>
          <img src={props.image} alt="Blog Resimleri" />
        </a>
        <span className="card-title">
          <a className="blogtitle" href={"/" + props.slug}>
            {props.title}
          </a>
        </span>
      </div>

      <div className="card-content">
        <div className="blog-min-read">{props.readtime} min read</div>
        <hr />
        <ReactMarkdown
          className="blog-content "
          source={props.content}
          renderers={{ code: CodeBlock }}
        />
        <div className="blog-date">{props.date}</div>
      </div>
      {props.full != 1 && (
        <div>
          <CommentSarea data={props.comment} />
          <Commentarea id={props.count} slug={props.slug} />
        </div>
      )}

      {props.full == 1 && (
        <div className="card-action">
          <Link href={props.slug}>
            <a>Devamını Oku</a>
          </Link>
        </div>
      )}
    </div>

    <style jsx>{`
      .blogtitle {
        color: #fff;
      }
      .blog-content {
        word-wrap: break-word;
        font-family: "ZillaSlab-Medium", sans-serif;
      }
      @font-face {
        font-family: "ZillaSlab-Medium";
        src: url("../static/fonts/ZillaSlab-Medium.ttf");
        font-style: normal;
        font-display: swap;
      }
      ul {
        list-style: none outside none;
      }
      .card {
        margin-top: 10%;
        word-wrap: break-word;
      }
      li {
        position: relative;
        display: inline;
        margin: 20px;
      }

      .blog-min-read {
        text-align: left;

        font-size: 12px;
      }

      .blog-header {
        margin-left: 30%;
        color: #002f6c;
        font-size: 28px;
        font-family: "ZillaSlab-Medium", sans-serif;
      }
      a {
        color: #002f6c;
        text-decoration: none;
      }
      .mt {
        font-size: 60px !important;
      }
      .blog-date {
        text-align: right;
        color: #000a12;
        margin: 10px 25px 25px 25px;
        font-family: "ZillaSlab-Medium", sans-serif;
      }
      card-image:hover {
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5) !important;
      }
    `}</style>
  </div>
);

export default Blog;
