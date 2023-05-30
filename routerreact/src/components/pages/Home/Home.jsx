import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="containerMain homeContainer">
      <div className="containerImgLink">
        <Link to="/gallery">
          <img
            src="https://img.freepik.com/fotos-premium/grafico-grafico-mercado-valores-indicador-inversion-comercio-bolsa-valores-comercio-monitor-pantalla-cerca_1962-1357.jpg?w=1380"
            alt="link to gallery page"
          />
        </Link>
        <Link to="/gallery" classname="ancorGallery">
          GALLERY
        </Link>
        <Link ti="/about"></Link>
      </div>
      <div className="containerImgLink">
        <Link to="/about">
          <img
            src="https://www.misfinanzasparainvertir.com/wp-content/uploads/2022/03/Bolsas-de-Valores-del-mundo.webp"
            alt="link to about page"
          />
        </Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};

export default Home;
