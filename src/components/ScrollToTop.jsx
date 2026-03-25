import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // Scroll to top on any route change (pathname, hash, or search params)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash, search]);

  return null;
};

export default ScrollToTop;