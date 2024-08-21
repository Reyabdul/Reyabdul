import React from "react";

//styles
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading loading-page" id="loading-page">
      <div className="name-container" id="name-container">
        <h1 className="page-name fade-in-bottom">REY ABDUL</h1>
        <span id="line-split">
          <hr />
        </span>
        <h1 className="page-name fade-in-top" id="page-name-jp">
          レイ アブドゥル
        </h1>
      </div>
    </div>
  );
}
