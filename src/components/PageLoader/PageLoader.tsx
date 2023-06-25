import React, { useLayoutEffect, useRef } from "react";
import "./PageLoader.css";

const PageLoader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  let listener: any = null;

  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        hideLoader();
      }, 1000);
    } else {
      listener = window.addEventListener("load", () => {
        setTimeout(() => {
          hideLoader();
        }, 2000);
      });
    }

    const watchLoaderTransition = () => {
      if (loaderRef.current) {
        loaderRef.current.style.display = "none";
      }
    };

    const loaderWrapper = document.getElementById("page-loader-wrapper");
    loaderWrapper?.addEventListener("transitionend", watchLoaderTransition);

    return () => {
      if (listener) {
        window.removeEventListener("load", listener);
      }
      loaderWrapper?.removeEventListener(
        "transitionend",
        watchLoaderTransition
      );
    };
  }, []);

  const hideLoader = () => {
    if (loaderRef.current) {
      loaderRef.current.style.opacity = "0";
    }
  };
  return (
    <div id="page-loader-wrapper" ref={loaderRef}>
      <h2 data-text="Dashboard" className="animated-text">
        Dashboard
      </h2>
    </div>
  );
};
export default PageLoader;
