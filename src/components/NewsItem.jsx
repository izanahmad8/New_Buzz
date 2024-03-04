import React from "react";

export default function NewsItem(props) {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={!imageURL ? "https://picsum.photos/200/300" : imageURL}
          style={{ height: "18rem" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="badge rounded-pill text-bg-danger">{source}</span>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsURL}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
