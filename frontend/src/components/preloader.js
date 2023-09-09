import React, {useLayoutEffect, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    useLayoutEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }, [pathname]);
  return (
    <>
      {loading && (
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
      )}
    </>
  );
};

export default Preloader;
