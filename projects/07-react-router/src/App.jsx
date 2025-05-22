import { HomePage } from "./pages/Home.jsx";
import { AboutPage } from "./pages/About.jsx";
import { Router } from "./Router.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import "./App.css";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFoundPage} />
    </main>
  );
}

export default App;
