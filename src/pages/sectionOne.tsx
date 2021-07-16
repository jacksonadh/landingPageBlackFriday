import Counter from "../components/counter";
import Input from "../components/input";
import '../styles/sectionOne.scss';

export default function SectionOne() {
  return (
    <div className="content">
      <div id="myModal" className="contador">
        <Counter id="dias" textConter="155" textDia="Dias" />
        <Counter id="horas" textConter="23" textDia="Horas" />
        <Counter id="minutos" textConter="55" textDia="Minutos" />
        <Counter id="segundos" textConter="12" textDia="Segundos" />
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
