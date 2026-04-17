import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0D0D0D" }}>
      <div className="text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#F7FBFE" }}>404</h1>
        <p className="text-xl mb-4" style={{ color: "rgba(247,251,254,0.55)" }}>
          Oops! Page not found
        </p>
        <a href="/" style={{ color: "#85E4FD", textDecoration: "underline" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
