import React, { useLayoutEffect } from "react";
import "./PageLoader.css";

function PageLoader() {
  let Listener = null;
  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        document.getElementById("page-loader-wrapper")!.style.opacity = "0";
      }, 1000);
    } else {
      Listener = window.addEventListener("load", (event) => {
        setTimeout(() => {
          document.getElementById("page-loader-wrapper")!.style.opacity = "0";
        }, 2000);
      });
    }
    const watchLoaderTransistion = document
      .getElementById("page-loader-wrapper")!
      .addEventListener("transitionend", () => {
        document.getElementById("page-loader-wrapper")!.style.display = "none";
      });
    return () => {
      Listener && window.removeEventListener("load", Listener);
      document
        .getElementById("page-loader-wrapper")!
        .removeEventListener("transitionend", watchLoaderTransistion);
    };
  }, []);

  return (
    <div id="page-loader-wrapper">
      <h2 data-text="Dashboard" className="animated-text">
        Dashboard
      </h2>
    </div>
  );
}

export default PageLoader;
