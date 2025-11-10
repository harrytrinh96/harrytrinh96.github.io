import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

import AnimatedCursor  from "../hooks/AnimatedCursor";
import AppRoutes from "./routes";
import Headermain from "../header";
import withRouter from "../hooks/withRouter";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="247, 118, 108"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={3}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}

