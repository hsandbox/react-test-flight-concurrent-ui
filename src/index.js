import React from "react";
import ReactDOM from "react-dom";

const title = "React Test Flight";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <p>{title}</p>
  </>
);

module.hot.accept();
