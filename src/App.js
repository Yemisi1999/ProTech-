import React from "react";
import AppRoutes from "./routes/appRoutes.jsx";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <ScrollToTop
        color="#CC0069"
        smooth
        className="flex justify-center items-center"
      />
      <AppRoutes />
    </div>
  );
}

export default App;
