import { useEffect, useState } from "react";
import { EVENTS } from "./consts.js";
import "./App.css";

const navigate = (href) => {
  window.history.pushState({}, "", href);
  // crear un evento presonalizado para avisar cambios
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una págia de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre Nosotros</button>
    </>
  );
};

const AboutPage = () => {
  return (
    <>
      <h1>Sobre Nosotros</h1>
      <div>
        <img
          src="https://unavatar.io/github/emetebe"
          alt="foto perfil de github de Bernardo"
        />
        <p>Hola me llamo Bernardo</p>
      </div>
      <button onClick={() => navigate("/")}>Ir a home</button>
    </>
  );
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
