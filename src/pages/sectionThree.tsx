import Card from "../components/card";
import sala from "../assets/images/Sala.png"
import "../styles/card.scss"

export default function SectionThree() {
  return (
    <div className="card">
      <aside>
        <Card
          src={sala}
          alt="Quadros posicionados na sala"
          className="quadro"
        />
      </aside>
      <div className="cardInfo">
        <Card
          src={sala}
          alt=""
          className="info"
        />
        <Card
          src={sala}
          alt=""
          className="info"
        />
        <>
          <Card
            src={sala}
            alt=""
            className="info"
          />
          <Card
            src={sala}
            alt=""
            className="info"
          />
        </>
      </div>
    </div>
  )
}