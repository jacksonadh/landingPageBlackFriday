import Card from "../components/card";
import ArteQuadros from "../assets/images/quadro/ArteQuadros.png"
import Quadro1 from "../assets/images/quadro/Quadro1.png"
import Quadro2 from "../assets/images/quadro/Quadro2.png"
import Quadro3 from "../assets/images/quadro/Quadro3.png"
import Quadro4 from "../assets/images/quadro/Quadro4.png"
import "../styles/card.scss"

export default function SectionThree() {
  return (
    <div className="contentQuadro">
      <aside>
        <Card
          src={ArteQuadros}
          alt="Quadros posicionados na sala"
          className="quadro"
        />
      </aside>
      <div className="card cardQuadro">

        <div className="cardInfo">
          <div className="quadroTitulo">
            <h2>Escolha o seu quadro favorito e decore a sua casa</h2>
          </div>
          <Card
            src={Quadro1}
            alt=""
            className="info"
          />
          <Card
            src={Quadro2}
            alt=""
            className="info"
          />
          <>
            <Card
              src={Quadro3}
              alt=""
              className="info"
            />
            <p className="info">Quadros com excelente qualidade</p>
            <Card
              src={Quadro4}
              alt=""
              className="info"
            />
            <p className="info">Escolha com Moldura ou em PVC</p>
          </>
        </div>
      </div>
    </div>
  )
}