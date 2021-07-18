import Counter from "../components/counter";
import Input from "../components/input";
import '../styles/sectionOne.scss';

export default function SectionOne() {

  return (
    <div className="content">
      <div className="contador">
        <Counter textCounter="155" textDia="Dias" />
        <Counter textCounter="23" textDia="Horas" />
        <Counter textCounter="55" textDia="Minutos" />
        <Counter textCounter="12" textDia="Segundos" />
      </div>
      <div className="box">
        <div className="box linha-vertical">
        </div>
      </div>

      <div className="form">
        <h2>CADASTRE-SE E RECEBA <span>OFERTAS EXCLUSIVAS</span></h2>
        <Input />
      </div>
    </div>
  )
}
