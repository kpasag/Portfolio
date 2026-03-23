import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
