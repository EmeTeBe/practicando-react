import { Link } from "../Link.jsx";

export const AboutPage = () => {
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
      <Link to="/">Ir a home</Link>
    </>
  );
};
